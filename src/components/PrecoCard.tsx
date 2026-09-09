import type { PrecoFipe } from '../inteface/fipe'

interface PrecoCardProps {
  dados: PrecoFipe;
}

function PrecoCard({ dados }: PrecoCardProps) {
  return (
    <div className="max-w-xs md:max-w-sm w-full bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden font-sans transition-all hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
        <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full backdrop-blur-md">
          Tabela FIPE
        </span>
        <h2 className="text-xs font-medium text-blue-100 mt-2">{dados.Marca}</h2>
        <h1 className="text-lg font-bold leading-snug mt-0.5">{dados.Modelo}</h1>
      </div>

      <div className="p-4 bg-slate-50/50 border-b border-slate-100 text-center">
        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Valor estimado</p>
        <p className="text-2xl md:text-3xl font-black text-emerald-600 my-0.5">{dados.Valor}</p>
        <span className="inline-flex items-center text-[11px] text-slate-400">
          Mês de referência: {dados.MesReferencia}
        </span>
      </div>

      <div className="p-4 grid grid-cols-2 gap-2.5 text-xs">
        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <span className="block text-[10px] text-slate-400 font-medium">Ano Modelo</span>
          <span className="text-slate-800 font-bold text-sm">{dados.AnoModelo}</span>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
          <span className="block text-[10px] text-slate-400 font-medium">Combustível</span>
          <span className="text-slate-800 font-bold text-sm">
            {dados.Combustivel}{' '}
            <span className="text-[10px] font-normal text-slate-500">({dados.SiglaCombustivel})</span>
          </span>
        </div>

        <div className="col-span-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100 flex justify-between items-center">
          <div>
            <span className="block text-[10px] text-slate-400 font-medium">Código FIPE</span>
            <span className="text-slate-800 font-mono font-semibold text-xs">{dados.CodigoFipe}</span>
          </div>
          <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
            Autenticado
          </span>
        </div>
      </div>
    </div>
  );
}

export default PrecoCard;
