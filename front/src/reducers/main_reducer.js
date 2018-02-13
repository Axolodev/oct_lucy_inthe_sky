import { combineReducers } from 'redux';

import PicturesReducer from './pictures_reducer';

const rootReducer = combineReducers({
  pictures: PicturesReducer,
});

export default rootReducer;
