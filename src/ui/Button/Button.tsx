import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';

type ButtonProps = {
  bgColor: string;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
	                                 bgColor,
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
		<button {...props} style={{backgroundColor: bgColor}} className={rootClasses.join(' ')}>
			{children}
		</button>
	);
};

export default Button;
