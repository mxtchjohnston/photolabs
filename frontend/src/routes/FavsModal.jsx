import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';


const FavsModal = props => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.showFavs}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <header className='photo-details-modal__header'>Favs</header>
      <PhotoList list={Object.values(props.state.favs)} {...props}/>
    </div>
  );
};

export default FavsModal;