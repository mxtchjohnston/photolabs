import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.list.map(elem => <li key={elem.id}><PhotoListItem {...elem} {...props}/></li>)}
    </ul>
  );
};

export default PhotoList;
