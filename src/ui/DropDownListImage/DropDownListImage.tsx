import React, { FC, useState } from 'react';

import { IoIosArrowDown } from 'react-icons/io';

import OutsideClickHandler from '../../components/OutsideClickHandler';
import './DropDownListImage.scss';

interface DropDownListImageProps {
  parent: ListItem;
  selected: ListItem;
  setSelected: (value: ListItem) => void;
  list: ListItem[];
}
export interface ListItem {
  img: React.ReactNode;
  text: string;
}

const DropDownListImage: FC<DropDownListImageProps> = ({ parent, selected, setSelected, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { img, text } = parent;

  // Открытие/закрытие dropdown
  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  // При клике на элемент dropdown
  const handleOptionClick = (option: ListItem): void => {
    setSelected(option);
  };

  return (
    <div className={`ui-dropdown-list-image ${isOpen && 'open'}`}>
      <OutsideClickHandler onOutsideClick={setIsOpen}>
        <div onClick={toggleDropdown} className="ui-dropdown-list-image__top">
          <div className="ui-dropdown-list-image__parent">
            {img}
            <span>{text}</span>
          </div>
          <div className="ui-dropdown-list-image__arrow">
            <IoIosArrowDown />
          </div>
        </div>
        {isOpen && (
          <div className="ui-dropdown-list-image__body">
            <ul className="ui-dropdown-list-image__list">
              {list.map((option) => (
                <li
                  className={`${option.text === selected.text && 'ui-dropdown-list-image__select'}`}
                  onClick={() => handleOptionClick(option)}
                  key={option.text}
                >
                  <span>
                    {option.img}
                    {option.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default DropDownListImage;
