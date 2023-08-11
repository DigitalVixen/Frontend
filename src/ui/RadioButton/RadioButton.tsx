import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import './RadioButton.scss';

interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	id: string;
	name: string;
	value: string;
	onChange: (value: string) => void;
}

const RadioButton: FC<RadioButtonProps> = ({
	                                           id,
	                                           name,
	                                           color,
	                                           value,
	                                           onChange,
	                                           ...props
                                           }) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};
	
	return (
    <div className="ui-radio-button">
      <input
        className="custom-radio"
        onChange={handleChange}
        type="radio"
        id={id}
        name={name}
        value={value}
        {...props}
      />
      <label htmlFor={id} />
    </div>
  );
};

export default RadioButton;