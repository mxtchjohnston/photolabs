import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton {...props}/>
      <img className="photo-list__image" src={props.urls.regular} onClick={() => props.onPhotoSelect(props)}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile} />
        <div className="photo-list__user-info">
          <div>{props.user.username}</div>
          <div className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
