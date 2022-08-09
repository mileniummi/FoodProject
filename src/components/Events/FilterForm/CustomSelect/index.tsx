import React, { useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

interface SelectProps {
  text: string;
  options: SelectOption[];
}

export interface SelectOption {
  value: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ text, options }) => {
  const [selectedOption, setSelectedOption] = useState<any>();

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{text}</legend>
      <div className={styles.options}>
        {options.map((option) => (
          <label
            key={option.value}
            className={classNames(
              styles.label,
              selectedOption === option.value && styles.selected
            )}
          >
            <input
              hidden
              className={styles.input}
              value={option.value}
              onClick={() => handleOptionClick(option.value)}
            />
            {option.name}
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default Select;
