import { REQUEST_PICTURES, PICTURES_FETCH_ERROR, PICTURES_FETCH_SUCCESS } from './action_types';

function requestPicturesData() {
  return {
    type: REQUEST_PICTURES
  }
}

function picturesFetchError(error) {
  return {
    type: PICTURES_FETCH_ERROR
  }
}

function picturesFetchSuccess(pictures) {
  return {
    type: PICTURES_FETCH_SUCCESS,
    pictures
  }
}

export function fetchPictures() {
  const fetchUrl = '/assets/img_list.json';

  return function(dispatch) {
    dispatch(requestPicturesData());

    return fetch(fetchUrl)
      .then(
        response => response.json(),
        error => dispatch(picturesFetchError(error))
      )
      .then(json => {
        dispatch(picturesFetchSuccess(json));
      });
  }
}