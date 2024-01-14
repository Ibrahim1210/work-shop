import React from "react";

export interface Checkbox {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Checkbox: React.FC<Checkbox> = ({ id, label, checked, onChange }) => {
  return (
    <div className="ml-36 mb-2 flex w-72">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} />
      <label className="ml-4 text-lg">{label}</label>
    </div>
  );
};

export default Checkbox;
