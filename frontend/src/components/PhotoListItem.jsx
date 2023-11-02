import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item">
      <PhotoFavButton isFav={props.isFav} toggleFavs={props.toggleFavs} id={props.id}/>
      <img className="photo-list__image" src={props.urls.regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile} />
        <div className="photo-list__user-info">
          <div>{props.user.name}</div>
          <div className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
