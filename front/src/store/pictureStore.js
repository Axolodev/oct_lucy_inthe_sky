import { observable } from "mobx";

const fetchUrl = 'http://ec2-54-213-113-139.us-west-2.compute.amazonaws.com/lucyinthesky/index.php/wp-json/wp/v2/imagenes?_embed';
// const fetchUrl = '/assets/img_list.json';

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
      
      // const pictures = json.map(({main_img, thumbnail, title, description}) => ({
      //   imageUrl: main_img,
      //   title,
      //   thumbnail,
      //   description
      // })); 
      
      const pictures = json.map(({title, acf, _embedded}) => ({
        imageUrl: acf.main_image && acf.main_image.url,
        title: title.rendered,
        thumbnail: acf.thumbnail && acf.thumbnail.url,
        description: acf.description
      }));

      self.pictures = pictures;
    });
}

export default appState;