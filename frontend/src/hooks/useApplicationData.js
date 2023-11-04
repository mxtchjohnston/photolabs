import { useReducer, useEffect, useState } from "react";
import axios from "axios";

//unused, i like my method better
const ACTIONS = {
  TOGGLE_FAV: 'toggleFav',
  SET_MODAL: 'setModal',
  SET_PHOTOS: 'setPhotos',
  SET_TOPICS: 'setTopics'
};

//The meat. the appropriate function is selected^1 from action type and executed with params^2
const reducer = (state, {type, params}) => {
  const actions = {
    toggleFav : id => {
      const stateCopy = {...state};
      if (state.favs.includes(id)) {
        const newFavs = stateCopy.favs.filter(x => x !== id);
        stateCopy.favs = newFavs;
        return stateCopy;
      }
      stateCopy.favs = stateCopy.favs.concat(id);
      return stateCopy;
    },
    setModal: props => {
      return {...state, modal: props};
    },
    setPhotos: photos => {
      return {...state, photos: [...photos]};
    },
    setTopics: topics => {
      return {...state, topics: [...topics]};
    }
  };

  const fn = actions[type]; //^1
  if (!fn) {
    throw new Error(`Action type ${type} is invalid`);
  }

  return fn(params); //^2
};

const useApplicationData = (initial = {favs: [], modal: null, photos: [], topics: []}) => {
  
  const [state, dispatch] = useReducer(reducer, initial);
  const [topicId, setTopicId] = useState(0); //Used for topic selection

  //Server import topics
  useEffect(() => {
    axios.get('api/topics')
      .then(resp => {
        dispatch({type: 'setTopics', params: resp.data});
      })
      .catch(error => console.log(error.message));
  }, []);

  //server import topics, 0 used for all
  useEffect(() => {
    if (topicId === 0) {
      axios.get('/api/photos')
      .then(resp => {
        dispatch({type: 'setPhotos', params: resp.data});
      })
      .catch(error => console.log(error.message));
      return;
    }
    axios.get(`api/topics/photos/${topicId}`)
      .then(resp => {
        dispatch({type: 'setPhotos', params: resp.data});
      })
      .catch(error => console.log(error.message));
  }, [topicId]);

  //To export, helper function called by components
  const onPhotoSelect = props => dispatch({type: 'setModal', params: props});

  const onClosePhotoDetialsModal = () => dispatch({type: 'setModal', params: null});

  const updateToFavPhotoIds = id => dispatch({type: 'toggleFav', params: id});

  const isFav = id => state.favs.includes(id);

  const isFavPhotoExist = state.favs.length > 0;

  const onLoadTopic = topicId => setTopicId(topicId);

  return {state, onPhotoSelect, updateToFavPhotoIds, isFav, isFavPhotoExist, onLoadTopic, onClosePhotoDetialsModal};
};

export default useApplicationData;