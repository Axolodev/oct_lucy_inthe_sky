import { REQUEST_PICTURES, PICTURES_FETCH_ERROR, PICTURES_FETCH_SUCCESS } from '../actions/action_types';


export default function(state = [], action) {
  switch(action.type) {
    case PICTURES_FETCH_SUCCESS:
      return action.pictures;
    case PICTURES_FETCH_ERROR:
    case REQUEST_PICTURES:
    default:
      break;
  }

  return state;
};