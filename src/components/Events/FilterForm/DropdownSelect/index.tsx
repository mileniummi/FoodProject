import React from "react";

interface SelectProps {
  text: string;
  options: SelectOption[];
}

export interface SelectOption {
  value: string;
  name: string;
}

const DropdownSelect: React.FC<SelectProps> = ({ text, options }) => {
  return (
    <select>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default DropdownSelect;
