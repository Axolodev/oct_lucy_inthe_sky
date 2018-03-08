import { observable } from "mobx";

const fetchUrl = 'http://localhost:8888/wp-json/wp/v2/imagenes?_embed';

const appState = observable({
  pictures: []
});

appState.fetchPictures = function() {
  let self = this;

  fetch(fetchUrl)
    .then(
      response => response.json()
    )
    .then(json => {
      const pictures = json.map(({title, acf, _embedded}) => ({
        imageUrl: _embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url,
        title: title.rendered,
        thumbnail: acf.thumbnail && acf.thumbnail.sizes.large,
        description: acf.description && acf.description
      }));

      self.pictures = pictures;
    });
}

export default appState;