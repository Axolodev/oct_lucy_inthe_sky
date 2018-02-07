import { combineReducers } from 'redux';

import ActivePictureReducer from './active_picture_reducer';
import PicturesReducer from './pictures_reducer';

const rootReducer = combineReducers({
  pictures: PicturesReducer,
  activePicture: ActivePictureReducer,
});

export default rootReducer;
