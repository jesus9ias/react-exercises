// import images from './images.json';

export default class MovieService {
  static getImages(searchTerm) {
    const url = 'https://api.unsplash.com/photos/random?&count=12&w=9000&client_id=d5030538314a09ee44d0e4656aed3ef88fa202681a4e59ce2aef1cdf4d6523cc';
    return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch((error) => {
      return [];
    });
  }
}