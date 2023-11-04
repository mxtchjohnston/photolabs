import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';



const HomeRoute = props => {
  return (
    <div className="home-route">
      <TopNavigation {...props}>
        <TopicList {...props}/>
      </TopNavigation>
      <PhotoList list={props.state.photos} {...props}/>
    </div>
  );
};

export default HomeRoute;
