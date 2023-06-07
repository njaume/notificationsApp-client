import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const InputTextArea = (
  { label }: InputProps,
  ref: React.LegacyRef<any>
) => {
  return (
    <div className="w-full">
      <label>{label}</label>
      <textarea
        ref={ref}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default React.forwardRef(InputTextArea);
