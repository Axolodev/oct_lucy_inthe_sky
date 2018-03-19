import { observable } from "mobx";

const baseUrl = 'http://ec2-54-213-113-139.us-west-2.compute.amazonaws.com/lits/wp-json/wp/v2';
const imgsFetchUrl = `${baseUrl}/imagenes`;
const descriptionFetchUrl = `${baseUrl}/description`;
const aboutPictureUrl = `${baseUrl}/about_picture`;

const appState = observable({
  pictures: [],
  description: "",
  aboutPicture: null
});

const fetchJson = async (fetchUrl) => {
  const response = await fetch(fetchUrl)

  return response.json();
}

appState.fetchAppData = async function() {
  const [descriptionData] = await fetchJson(descriptionFetchUrl);
  const [aboutPicture] = await fetchJson(aboutPictureUrl);
  const dirtyPicturesData = await fetchJson(imgsFetchUrl);

  this.pictures = dirtyPicturesData.map(({title, acf, _embedded}, index) => ({
    imageUrl: acf.main_image && acf.main_image.url,
    title: title.rendered,
    thumbnail: acf.thumbnail && acf.thumbnail.url,
    description: acf.description,
    index
  }));

  this.description = descriptionData.acf.descripcion;
  this.aboutPicture = aboutPicture.acf.image.url;
}

export default appState;