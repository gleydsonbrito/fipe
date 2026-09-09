import SelectField from './components/SelectField';

const TIPOS_VEICULO = [
  { codigo: '', nome: '' }
];

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row justify-around items-center gap-8 p-6">
      <div className="w-full md:w-72 space-y-3 shrink-0">
        <SelectField
          label="Tipo de Veículo"
          options={TIPOS_VEICULO}
          value={''}
          onChange={() => {}}
        />
      </div>

      <div className="w-full flex-1 flex justify-center md:justify-start">
      </div>
    </div>
  );
}

export default App;
