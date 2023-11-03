import { useEffect, useReducer } from "react"

const reducer = ({action, data}) => {
  
}

const useApplicationData = (initial={}) => {
  const [state, dispatch] = useReducer(reducer, initial);



  return {state};
};

export default useApplicationData;