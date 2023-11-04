import { useReducer } from "react";

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
    }
  };

  const fn = actions[type];
  if (!fn) {
    throw new Error(`Action type ${type} is invalid`);
  }

  return fn(params);
};

const useApplicationData = (initial = {favs: [], modal: null}) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const onPhotoSelect = props => dispatch({type: 'setModal', params: props});

  const onClosePhotoDetialsModal = () => dispatch({type: 'setModal', params: null});

  const updateToFavPhotoIds = id => dispatch({type: 'toggleFav', params: id});

  const isFav = id => state.favs.includes(id);

  const isFavPhotoExist = state.favs.length > 0;

  const onLoadTopic = undefined;


  return {state, onPhotoSelect, updateToFavPhotoIds, isFav, isFavPhotoExist, onLoadTopic, onClosePhotoDetialsModal};
};

export default useApplicationData;