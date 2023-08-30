import React, { ButtonHTMLAttributes, FC, useState } from 'react';
import { ReactComponent as Cart } from '../../img/cart.svg';
import './ButtonCart.scss';

interface ButtonCartProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialSelected?: boolean;
}

const ButtonCart: FC<ButtonCartProps> = ({ initialSelected = false, ...props }) => {
  const [selected, setSelected] = useState(initialSelected);

  const rootClasses: string[] = ['ui-button-cart'];
  if (selected) {
    rootClasses.push('selected');
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setSelected(!selected)}>
      <button {...props}>{selected ? <Cart /> : <Cart />}</button>
    </div>
  );
};

export default ButtonCart;
