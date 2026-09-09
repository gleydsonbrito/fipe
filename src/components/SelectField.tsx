import type { OpcaoFipe } from '../types/fipe';

interface SelectFieldProps {
  label: string;
  options: OpcaoFipe[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

function SelectField({
  label,
  options,
  value,
  onChange,
  placeholder = 'Selecione uma opção',
  disabled = false,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
        {label}
      </label>
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2.5 bg-white border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="">{placeholder}</option>
        {options.map(({ codigo, nome }) => (
          <option key={codigo} value={codigo}>
            {nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
