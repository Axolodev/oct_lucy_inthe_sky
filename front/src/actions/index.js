import { SELECT_PICTURE } from './action_types';

export function selectPicture(picture) {
  return {
    type: SELECT_PICTURE,
    payload: picture
  };
}