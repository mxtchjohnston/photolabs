import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = props => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.modalControl.reset}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton favControl={props.favControl} id={props.id} />
        <img className="photo-details-modal__image" src={props.urls.full}/>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={props.user.profile} />
          <div className="photo-details-modal__header">
            <div>{props.user.name}</div>
            <div className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</div>
          </div>
        </div>
      </div>
      <PhotoList list={Object.values(props.similarPhotos)} modalControl={props.modalControl}/>
    </div>
  );
};

export default PhotoDetailsModal;
