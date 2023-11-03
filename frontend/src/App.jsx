import React, { useState } from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from 'mocks/photos';
import topics from 'mocks/topics';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favs, setFavs] = useState(() => []);
  const [modal, setModal] = useState(() => null);

  const toggleFavs = id => () => {
    if (favs.includes(id)) {
      setFavs(favs.filter(x => x !== id));
    } else {
      setFavs(favs.concat(id));
    }
  };

  const modalControl = {
    reset: ()  => setModal(null),
    set: props => () => setModal(props)
  };

  const favControl = {
    toggleFavs,
    isFav: id => favs.includes(id),
    isFavPhotoExist: favs.length > 0
  };
  
  const props = {
    topics,
    photos,
    modalControl,
    favControl
  };

  return (
    <div className="App">
      <HomeRoute {...props}/>
      { modal ? <PhotoDetailsModal {...modal} modalControl={modalControl}/> : ""}
    </div>
  );
};

export default App;
