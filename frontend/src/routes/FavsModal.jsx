import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const FavsModal = props => {
  return (
    <div className="photo-details-modal">
      <header className='photo-details-modal__header'>Favs</header>
      {console.log(Object.values(props.state.favs))}
      <PhotoList list={Object.values(props.state.favs)} {...props}/>
    </div>
  );
};

export default FavsModal;