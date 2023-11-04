import { useReducer, useEffect, useState } from "react";
import axios from "axios";

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

  const fn = actions[type];
  if (!fn) {
    throw new Error(`Action type ${type} is invalid`);
  }

  return fn(params);
};

const useApplicationData = (initial = {favs: [], modal: null, photos: [], topics: []}) => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [topicId, setTopicId] = useState(0);

  const onPhotoSelect = props => dispatch({type: 'setModal', params: props});

  const onClosePhotoDetialsModal = () => dispatch({type: 'setModal', params: null});

  const updateToFavPhotoIds = id => dispatch({type: 'toggleFav', params: id});

  const isFav = id => state.favs.includes(id);

  const isFavPhotoExist = state.favs.length > 0;

  const onLoadTopic = topicId => setTopicId(topicId);

  useEffect(() => {
    const promises = [axios.get('/api/photos'), axios.get('api/topics')];
    Promise.all(promises)
      .then(resp => {
        const photos = resp[0].data;
        const topics = resp[1].data;
        dispatch({type: 'setPhotos', params: photos});
        dispatch({type: 'setTopics', params: topics});
      })
      .catch(error => console.log(error.message));
  }, []);

  useEffect(() => {
    if (topicId === 0) {
      return;
    }
    axios.get(`api/topics/photos/${topicId}`)
      .then(resp => {
        dispatch({type: 'setPhotos', params: resp.data});
      })
      .catch(error => console.log(error.message));
  }, [topicId]);

  return {state, onPhotoSelect, updateToFavPhotoIds, isFav, isFavPhotoExist, onLoadTopic, onClosePhotoDetialsModal};
};

export default useApplicationData;