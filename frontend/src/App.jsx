import React from 'react';

//import PhotoListItem from './components/PhotoListItem';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// import photos from 'mocks/photos';
// import topics from 'mocks/topics';
import useApplicationData from 'hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {

  const props = useApplicationData();
  
  return (
    <div className="App">
      <HomeRoute {...props}/>
      { props.state.modal ? <PhotoDetailsModal {...props}/> : ""}
    </div>
  );
};

export default App;
