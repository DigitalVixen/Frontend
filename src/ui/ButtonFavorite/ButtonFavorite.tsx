import React, {ButtonHTMLAttributes, FC, useState} from 'react';
import { PiHeartStraightLight, PiHeartStraightFill } from 'react-icons/pi';
import './ButtonFavorite.scss'

interface ButtonFavoriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	initialSelected?: boolean;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({initialSelected = false, ...props}) => {
	const [selected, setSelected] = useState(initialSelected);
	
	const rootClasses: string[] = ['ui-button-favorite'];
	if (selected) {
		rootClasses.push('selected');
	}
	return (
		<div className={rootClasses.join(' ')} onClick={() => setSelected(!selected)}>
			<button {...props}>
				{
					selected ? <PiHeartStraightFill/> : <PiHeartStraightLight/>
				}
			</button>
		</div>
	);
};

export default ButtonFavorite;