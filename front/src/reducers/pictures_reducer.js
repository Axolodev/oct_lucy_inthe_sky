import { REQUEST_PICTURES, PICTURES_FETCH_ERROR, PICTURES_FETCH_SUCCESS } from '../actions/action_types';


export default function(state = [], action) {
  console.log(action);
  switch(action.type) {
    case PICTURES_FETCH_SUCCESS:
      return action.pictures;
  }

  return state;
};