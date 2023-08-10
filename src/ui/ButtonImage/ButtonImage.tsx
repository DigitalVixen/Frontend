import React, {ButtonHTMLAttributes, FC} from 'react';
import './ButtonImage.scss'

interface ButtonImageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	img: React.ReactNode;
	text: string;
	bgColor?: string;
	color?: string;
}

const ButtonImage: FC<ButtonImageProps> = ({
	                                           img,
	                                           text ,
	                                           bgColor = '#000',
	                                           color = '#fff',
	                                           ...props
}) => {
	return (
		<button style={{backgroundColor: bgColor, color}} {...props} className="ui-button-image">
			{img}
			{text}
		</button>
	);
};

export default ButtonImage;