import React, {FC, useState} from 'react';
import OutsideClickHandler from "../../components/OutsideClickHandler";
import { IoIosArrowDown, IoMdClose } from 'react-icons/io';
import './DropDownList.scss'

interface DropDownListProps {
	initialValue: string;
	selected: string;
  setSelected: (value: string) => void;
  list: string[];
}

const DropDownList:FC<DropDownListProps> = ({initialValue, selected, setSelected, list}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
	
	// Открытие/закрытие dropdown
	const toggleDropdown = (): void => {
		setIsOpen(!isOpen);
	};
	
	// При клике на элемент dropdown
	const handleOptionClick = (option: string):void => {
		setSelected(option);
		setIsOpen(false);
	};
	
	return (
    <div className={`dropdown ${isOpen && 'open'}`}>
      <OutsideClickHandler onOutsideClick={setIsOpen}>
        <div onClick={toggleDropdown} className="dropdown__top">
          <span>{selected ? selected : initialValue}</span>
	        <div className="dropdown__management">
		        {selected && <IoMdClose onClick={() => setSelected('')}/>}
		        <div className="dropdown__arrow">
			        <IoIosArrowDown />
		        </div>
	        </div>
        </div>
        {isOpen && (
          <div className="dropdown__body">
            <ul className="dropdown__list">
              {list.map((option) => (
                <li onClick={() => handleOptionClick(option)} key={option}>
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default DropDownList;