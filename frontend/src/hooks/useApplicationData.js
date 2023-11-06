import { useReducer, useEffect, useState } from "react";
import axios from "axios";

const ACTIONS = {
  TOGGLE_FAV: 'toggleFav',
  SET_MODAL: 'setModal',
  SET_PHOTOS: 'setPhotos',
  SET_TOPICS: 'setTopics'
};

//The meat. the appropriate function is selected^1 from action type and executed with params^2
const reducer = (state, { type, params }) => {
  //I despise switch statements and nested ifs, Selector Objects all the way.
  const actions = {};
  
  //if fav is contained, remove it, otherwise add it to favs
  actions[ACTIONS.TOGGLE_FAV] = id => {
    const stateCopy = { ...state };
    if (state.favs.includes(id)) {
      const newFavs = stateCopy.favs.filter(x => x !== id);
      stateCopy.favs = newFavs;
      return stateCopy;
    }
    stateCopy.favs = stateCopy.favs.concat(id);
    return stateCopy;
  };

  //Load the modal data
  actions[ACTIONS.SET_MODAL] = props => {
    return { ...state, modal: props };
  };
  
  //Set the photo data
  actions[ACTIONS.SET_PHOTOS] = photos => {
    return { ...state, photos: [...photos] };
  };

  //set the topics
  actions[ACTIONS.SET_TOPICS] = topics => {
    return { ...state, topics: [...topics] };
  };

  //select an action based on the type, check if action is valid, apply params or 'payload' to that function.
  const fn = actions[type]; //^1
  if (!fn) {
    throw new Error(`Action type ${type} is invalid`);
  }

  return fn(params); //^2
};

const useApplicationData = (initial = { favs: [], modal: null, photos: [], topics: [] }) => {

  const [state, dispatch] = useReducer(reducer, initial);

  //Using useState
  const [topicId, setTopicId] = useState(0); //Used for topic selection

  //Server import topics
  useEffect(() => {
    axios.get('api/topics')
      .then(resp => {
        dispatch({ type: 'setTopics', params: resp.data });
      })
      .catch(error => console.log(error.message));
  }, []);

  //server import topics, 0 used for all
  useEffect(() => {
    if (topicId === 0) {
      axios.get('/api/photos')
        .then(resp => {
          dispatch({ type: ACTIONS.SET_PHOTOS, params: resp.data });
        })
        .catch(error => console.log(error.message));
      return;
    }
    axios.get(`api/topics/photos/${topicId}`)
      .then(resp => {
        dispatch({ type: ACTIONS.SET_PHOTOS, params: resp.data });
      })
      .catch(error => console.log(error.message));
  }, [topicId]);

  //To export, helper function called by components{
  const onPhotoSelect = props => {
    if (!props.similar_photos) {
      const similarPhotos = state.photos.filter(x => x.id === props.id)[0].similar_photos;
      dispatch({ type: ACTIONS.SET_MODAL, params: { ...props, 'similar_photos': similarPhotos } }); //Not an error, an ESLINT RULE, Database provides this name
      return;
    }
    dispatch({ type: ACTIONS.SET_MODAL, params: props });
  };

  const onClosePhotoDetialsModal = () => dispatch({ type: ACTIONS.SET_MODAL, params: null });

  const updateToFavPhotoIds = id => dispatch({ type: ACTIONS.TOGGLE_FAV, params: id });

  const isFav = id => state.favs.includes(id);

  const isFavPhotoExist = state.favs.length > 0;

  const onLoadTopic = topicId => setTopicId(topicId);

  return { state, onPhotoSelect, updateToFavPhotoIds, isFav, isFavPhotoExist, onLoadTopic, onClosePhotoDetialsModal };
};

export default useApplicationData;