import React, { FC } from 'react';
import './BreadCrumbs.scss';
import { NavLink } from 'react-router-dom';

interface BreadCrumbsProps {
  list: UiBreadCrumb[];
  handleClickCrumb: (crumb: UiBreadCrumb) => void;
}

export interface UiBreadCrumb {
  text: string;
  url: string;
}

const BreadCrumbs: FC<BreadCrumbsProps> = ({ list, handleClickCrumb }) => {
  return (
    <div className="ui-breadcrumbs">
      {list.map((crumb, idx) => (
        <div key={crumb.text} className="ui-breadcrumbs__el">
          <NavLink to={crumb.url}>
            <span className="ui-breadcrumbs__crumb" onClick={() => handleClickCrumb(crumb)}>
              {crumb.text}
            </span>
          </NavLink>
          {idx < list.length - 1 && <div className="ui-breadcrumbs__dot"></div>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
