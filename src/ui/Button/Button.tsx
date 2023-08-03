import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
	color?: string;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
}

const Button: FC<ButtonProps> = ({
	                                 bgColor = '#000',
                                   color = '#fff',
	                                 children,
	                                 small,
	                                 medium,
	                                 big,
	                                 ...props
                                 }) => {
	
	const rootClasses: string[] = ['ui-button'];
	if (small) {
		rootClasses.push('small-ui-btn');
	}
	if (medium) {
		rootClasses.push('medium-ui-btn');
	}
	if (big) {
		rootClasses.push('big-ui-btn');
	}
	
	return (
		<button {...props} style={{backgroundColor: bgColor, color}} className={rootClasses.join(' ')}>
			{children}
		</button>
	);
};

export default Button;
