import React, { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';





// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favs, setFavs] = useState([]);

  const toggleFavs = id => () => {
    if (favs.includes(id)) {
      setFavs(favs.filter(x => x !== id));
    } else {
      setFavs(favs.concat(id));
    }
  };

  const isFav = id => favs.includes(id);
  const isFavPhotoExist = favs.length > 0;

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} isFav={isFav} toggleFavs={toggleFavs} isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default App;
