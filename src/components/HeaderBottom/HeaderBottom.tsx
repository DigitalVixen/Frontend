import React, { FC } from 'react';

import Button from '../../ui/Button/Button';
import "./HeaderBottom.scss";
import Input from "../../ui/Input/Input";

import { ReactComponent as Catalog} from "../../img/catalog.svg";
import { ReactComponent as Lk} from "../../img/lk.svg";
import { ReactComponent as Like} from "../../img/like.svg";
import { ReactComponent as Cart} from "../../img/cart.svg";

import IconButton from "../../ui/IconButton/IconButton";

const HeaderBottom: FC = () => {
  return (
    <div className="header-bottom">
      <div className="header-bottom__container">
        <div className="header-bottom__search header-bottom-search">
          <Button bgColor="#93C6E4" small >
	          <div className="header-bottom-search__button header-bottom-button">
		          <div className="header-bottom-button__text">Каталог</div>
		          <Catalog />
	          </div>
					</Button>
	        <div className="header-bottom-search__input header-input">
		        <Input placeholder="Поиск..."/>
		        <button type="submit" className="header-input__button"></button>
	        </div>
        </div>
	      <div className="header-bottom__nav header-bottom-nav">
		      <IconButton img={<Lk />}>Личный кабинет</IconButton>
		      <IconButton img={<Like />}>Избранное</IconButton>
		      <IconButton img={<Cart />}>Корзина</IconButton>
	      </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
