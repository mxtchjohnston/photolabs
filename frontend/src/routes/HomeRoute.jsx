import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = props => {
  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={props.favControl.isFavPhotoExist}>
        <TopicList list={props.topics}/>
      </TopNavigation>
      <PhotoList list={props.photos} favControl={props.favControl} />
    </div>
  );
};

export default HomeRoute;
