import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: any }[];
}

const InputSelect = (
  { options, label }: InputProps,
  ref: React.LegacyRef<any>
) => {
  return (
    <div className="w-full">
      <label>{label}</label>
      <select
        ref={ref}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((o) => (
          <option key={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(InputSelect);
