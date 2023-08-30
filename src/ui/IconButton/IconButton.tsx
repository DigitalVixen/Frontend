import {ButtonHTMLAttributes, FC, ReactNode} from 'react';
import "./IconButton.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	img: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({img, children, ...props}) => {
	return (
		<button className="icon-button" {...props}>
			{img}
			<span className="icon-button__text">{children}</span>
		</button>
	);
};

export default IconButton;