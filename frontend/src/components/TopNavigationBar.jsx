import React from 'react';

import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = props => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      {props.children}
      <FavBadge {...props}/>
    </div>
  );
};

export default TopNavigation;