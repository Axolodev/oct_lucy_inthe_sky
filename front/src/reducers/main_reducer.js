import { combineReducers } from 'redux';
import { dialogReducer } from 'redux-dialog';

import PicturesReducer from './pictures_reducer';

const rootReducer = combineReducers({
  pictures: PicturesReducer,
  dialogReducer
});

export default rootReducer;
