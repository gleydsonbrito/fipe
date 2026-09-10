import { useEffect, useState } from 'react';
import SelectField from './components/SelectField';
import PrecoCard from './components/PrecoCard.tsx'

import type {Marca, Modelo, Ano, RepostaModeloFipe, PrecoFipe} from './types/fipe.ts' 


const TIPOS_VEICULO = [
  { codigo: 'carros', nome: 'Carros' },
  { codigo: 'motos', nome: 'Motos' },
  { codigo: 'caminhoes', nome: 'Caminhões' },
  
];

function App() {
  const [tipo, setTipo] = useState<string>('');
  
  const [marcas, setMarcas] = useState<Marca[]>([])
  const [codMarca, setCodMarca] = useState<string>('')

  const [modelos, setModelos] = useState<Modelo[]>([])
  const [codModelo, setCodModelo] = useState<string>('')

  const [anos, setAnos] = useState<Ano[]>([])
  const [codAno, setCodAno] = useState<string>('')

  const [data, setData] = useState<PrecoFipe>()
  
  useEffect(() => {
    let ativo = true
    if(!tipo) {
      setMarcas([])
      setModelos([])
      setAnos([])
      setData(undefined)
    }
    const fetchMarcas = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`)
        
        if (!response.ok) throw new Error('Erro na requisição de marcas')
        
        const marcas: Marca[] = await response.json()
        if(ativo) setMarcas(marcas)

      }catch(err) {
        console.log(`Erro ao buscar as marcas: ${err}`)
      }
    }
    setCodMarca('')
    fetchMarcas()
    return () => {
      ativo = false
    }
  }, [tipo])

  useEffect( () => {
    let ativo = true
    if(!codMarca) {
      setModelos([])
      setAnos([])
      setData(undefined)
    }
    const fetchModelos = async () => {
      try{
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${codMarca}/modelos`)

        if(!response.ok) throw new Error('Erro ao buscar os modelos.')
          
          
        const modelosFIPE: RepostaModeloFipe = await response.json()        
        if(ativo) setModelos(modelosFIPE.modelos)
      
      }catch(err) {
        console.log(`Erro ao buscar os modelos: ${err}`)
      }
    }
    setCodModelo('')
    fetchModelos()
    return ( ) => {
      ativo = false
    }
  }, [tipo ,codMarca])

  useEffect( () => {
    if(!codModelo) {
      setAnos([])
      setData(undefined)
    }
    let ativo = true
    const fetchAnos = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos`)
        if(!response.ok) throw new Error(`Erro ao buscar os anos dos veículos`)

        const anosFipe: Ano[] = await response.json()
        if(ativo) setAnos(anosFipe)
      } catch (error) {
        console.log(`Errro ao buscar o ano dos veículos: ${error}`)
      }
    }
    setCodAno('')
    fetchAnos()
    return () => {
      ativo = false
    }
  }, [tipo ,codMarca, codModelo])

  useEffect(() => {
    if(!codAno) {
      setData(undefined)
    }
    let ativo = true
    const fetchData = async () => {
      try {
        const response = await fetch(`https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos/${codAno}`)
        if(!response.ok) throw new Error('Erro ao buscar o preço do veículo')

        const preco: PrecoFipe = await response.json()
        if(ativo) setData(preco)
      
      } catch (error) {
        console.log(`Erro ao buscar os dados de preço`, error)
      }
    }
    fetchData()
    return () => {
      ativo = false
    }
  }, [tipo ,codMarca, codAno])

  return (
    <div className="min-h-screen w-full flex flex-col justify-around items-center gap-8 p-6">
      <div className="w-full md:w-72 space-y-3 shrink-0">
        <SelectField
          label="Tipo de Veículo"
          options={TIPOS_VEICULO}
          value={tipo}
          onChange={(valor) => setTipo(valor)}
        />
      </div>
      {marcas.length > 0 && 
        <div className="w-full md:w-72 space-y-3 shrink-0">
          <SelectField
            label="Marca do Veículo"
            options={marcas}
            value={codMarca}
            onChange={(valor) => setCodMarca(valor)}
          />
        </div>}
        {modelos.length > 0 && 
        <div className="w-full md:w-72 space-y-3 shrink-0">
          <SelectField
            label="Modelo do Veículo"
            options={modelos}
            value={codModelo}
            onChange={(valor) => setCodModelo(valor)}
          />
        </div>}
        {anos.length > 0 && 
        <div className="w-full md:w-72 space-y-3 shrink-0">
          <SelectField
            label="Ano do Veículo"
            options={anos}
            value={codAno}
            onChange={(valor) => setCodAno(valor)}
          />
        </div>}
  
      <div className="w-full flex-1 flex justify-center md:justify-start">
        {data && <PrecoCard dados={data}/>}
      </div>
    </div>
  );
}

export default App;
