import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.list.map(elem => <PhotoListItem key={elem.id} {...elem} favControl={props.favControl}/>)}
    </ul>
  );
};

export default PhotoList;
