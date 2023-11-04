import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = props => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.state.topics.map(elem => <TopicListItem key={elem.id} {...elem}/>)}
    </div>
  );
};

export default TopicList;
