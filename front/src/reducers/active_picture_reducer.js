import { SELECT_PICTURE } from '../actions/action_types';

export default function(state = null, action) {
  switch (action.type) {
    case SELECT_PICTURE:
      return action.payload;
  }

  return state;
}