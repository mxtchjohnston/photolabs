import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, showFavs}) => {
  return (
    <div className='fav-badge' onClick={showFavs}>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  );
};

export default FavBadge;