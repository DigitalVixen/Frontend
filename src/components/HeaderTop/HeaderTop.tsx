import React, {FC, useState} from 'react';

import {ReactComponent as Burger} from '../../img/burger.svg';
import {ReactComponent as Close} from '../../img/close.svg';
import {ReactComponent as Logo} from '../../img/logo.svg';
import cn from "classnames";

import './HeaderTop.scss';

const itemsList = ['ГопГрад', 'О нас', 'Акции', 'Клуб', 'Контакты'];

const HeaderTop: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleClickBurger = () => {
		setIsOpen(true);
	};
	const handleClickClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="header-top">
			<div className="header-top__container">
				<div className={cn('header-top__logo', 'header-top-logo')}>
					<div className="header-top-logo__img">
						<Logo />
					</div>
					<div className="header-top-logo__text">
						<div className="header-top-logo__title">
							<span>Digital</span>Vixen
						</div>
						<h2 className="header-top-logo__quote">Не просто магазин бытовой техники</h2>
					</div>
				</div>
				<ul
					className={cn('header-top__menu', 'header-top-menu', {
						_active: isOpen,
					})}
					onClick={handleClickClose}
				>
					{itemsList.map((text) => (
						<li className={cn('header-top-menu__item', {
							_active: isOpen,
						})}
						>
							{text}
						</li>
					))}
				</ul>
				<div onClick={handleClickBurger} className="header-top__burger">
					<Burger />
				</div>
				{isOpen && (
					<div onClick={handleClickClose} className="header-top__burger-close">
						<Close />
					</div>
				)}
			</div>
		</div>
	);
};

export default HeaderTop;
