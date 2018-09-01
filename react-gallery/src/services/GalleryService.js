// import images from './images.json';

export default class MovieService {
  static getImages(searchTerm) {
    const url = 'https://api.unsplash.com/photos/random?&count=12&w=9000&client_id=c698dc379d324a362c301990dd5c82aae3de28026239fa075afe92c38ef34470';
    return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    });
    // return images;
  }
}