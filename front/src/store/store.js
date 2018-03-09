import { observable } from "mobx";

const imgsFetchUrl = 'http://ec2-54-213-113-139.us-west-2.compute.amazonaws.com/lucyinthesky/index.php/wp-json/wp/v2/imagenes?_embed';
const descriptionFetchUrl = 'http://ec2-54-213-113-139.us-west-2.compute.amazonaws.com/lucyinthesky/index.php/wp-json/wp/v2/description';
// const imgsFetchUrl = '/assets/img_list.json';

const appState = observable({
  pictures: [],
  description: ""
});

appState.fetchPictures = function() {
  let self = this;

  fetch(imgsFetchUrl)
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
      
      const pictures = json.map(({title, acf, _embedded}, index) => ({
        imageUrl: acf.main_image && acf.main_image.url,
        title: title.rendered,
        thumbnail: acf.thumbnail && acf.thumbnail.url,
        description: acf.description,
        index
      }));

      self.pictures = pictures;
    });
}

appState.fetchDescription = function() {
  let self = this;

  fetch(descriptionFetchUrl)
    .then(
      response => response.json()
    )
    .then(([{acf}, ..._]) => {      
      self.description = acf.descripcion;
    });
}

export default appState;