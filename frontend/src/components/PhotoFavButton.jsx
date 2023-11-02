import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = props => {
  const selected = props.isFav(props.id);
  const handleClick = props.toggleFavs(props.id);
  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} displayAlert={false}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;