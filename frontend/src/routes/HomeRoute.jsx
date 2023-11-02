import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = props => {
  return (
    <div className="home-route">
      <TopNavigation>
        <TopicList list={props.topics}/>
      </TopNavigation>
      <PhotoList list={props.photos} isFav={props.isFav} toggleFavs={props.toggleFavs}/>
    </div>
  );
};

export default HomeRoute;
