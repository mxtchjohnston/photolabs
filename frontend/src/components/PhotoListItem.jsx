import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <li className="photo-list__item" key={props.id}>
      <img className="photo-list__image" src={props.imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{`${props.location.city}, ${props.location.country}`}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
