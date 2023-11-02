import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.list.map(elem => <PhotoListItem key={elem.id} {...elem} isFav={props.isFav} toggleFavs={props.toggleFavs}/>)}
    </ul>
  );
};

export default PhotoList;
