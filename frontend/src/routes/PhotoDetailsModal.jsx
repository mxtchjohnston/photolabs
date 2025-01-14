import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = props => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={props.onClosePhotoDetialsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item">
        <PhotoFavButton {...props} id={props.state.modal.id}/>
        <img className="photo-details-modal__image" src={props.state.modal.urls.full}/>
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={props.state.modal.user.profile} />
          <div className="photo-details-modal__header">
            <div>{props.state.modal.user.name}</div>
            <div className="photo-list__user-location">{`${props.state.modal.location.city}, ${props.state.modal.location.country}`}</div>
          </div>
        </div>
      </div>
      <header className='photo-details-modal__header'>Similar Photos</header>
      <PhotoList list={props.state.modal.similar_photos} {...props}/>
    </div>
  );
};

export default PhotoDetailsModal;
