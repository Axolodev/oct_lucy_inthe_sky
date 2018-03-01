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
  const fetchUrl = 'http://localhost:8888/wp-json/wp/v2/imagenes?_embed';

  return function(dispatch) {
    dispatch(requestPicturesData());

    return fetch(fetchUrl)
      .then(
        response => response.json(),
        error => dispatch(picturesFetchError(error))
      )
      .then(json => {
        const posts = json.map(({title, acf, _embedded}) => ({
          imageUrl: _embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url,
          title: title.rendered,
          thumbnail: acf.thumbnail && acf.thumbnail.sizes.large,
          description: acf.description && acf.description
        }));          
        dispatch(picturesFetchSuccess(posts));
      });
  }
}