import { FC } from "react";

interface ICheckbox {
    disabled: boolean;
    id: string;
    checked: boolean;

    onChange: (value: boolean) => void;
  }
  
  const Checkbox: FC<ICheckbox> = ({
    disabled,
    id,
    checked,
    onChange,
  }) => {
    return (
      <input 
        type="checkbox"
        name={id}
        disabled={disabled}
        checked={!!checked}
        onChange={
         (e)=>onChange(e.target.checked)
        }
      />
    );
  }

export default Checkbox;