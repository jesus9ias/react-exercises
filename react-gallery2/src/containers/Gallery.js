import React, { Component } from 'react';
import Storage from 'key-storage';
import LoadMore from '../components/LoadMore';
import ImagesGrid from '../components/ImagesGrid';
import GalleryModal from '../components/GalleryModal';
import GalleryService from '../services/GalleryService';
import FavoritesGrid from '../components/FavoritesGrid';

class Gallery extends Component{
  state = {
    showModal: false,
    url: '',
    imgs: [],
    favorites: []
  }

  async componentDidMount() {
    let imgs = JSON.parse(Storage.get('images'));
    let favs = JSON.parse(Storage.get('favorites'));
    if (!imgs) {
      imgs = await GalleryService.getImages();
      Storage.set('images', JSON.stringify(imgs));
    }
    this.setState({
      imgs,
      favorites: favs || []
    });
  }

  loadMoreHandler = async () => {
    const imgs = await GalleryService.getImages();
    const filteredImages = imgs.filter((img) => {
      return !this.state.imgs.find(i => i.id === img.id);
    });
    const newImages = [...this.state.imgs, ...filteredImages];
    Storage.set('images', JSON.stringify(newImages));
    this.setState({
      imgs: newImages
    });
  }
  
  addFavoriteHandler = (index) => {
    const favorites = this.state.favorites;
    const imgs = this.state.imgs;
    if (favorites.length <= 4) {
      const newFav = imgs[index];
      if (!favorites.find(img => img.id === newFav.id)) {
        const newFavs = [...favorites, newFav];
        const newImgs = imgs.filter((_, i) => i !== index);
        Storage.set('favorites', JSON.stringify(newFavs));
        Storage.set('images', JSON.stringify(newImgs));
        this.setState({
          favorites: newFavs,
          imgs: newImgs
        });
      }
    }
  }

  deleteFavoriteHandler = (index) => {
    const favorites = this.state.favorites.filter((_, i) => i !== index);
    const imgs = [this.state.favorites[index], ...this.state.imgs];
    Storage.set('favorites', JSON.stringify(favorites));
    Storage.set('images', JSON.stringify(imgs));
    this.setState({
      favorites,
      imgs
    });
  }

  render() {
    const { imgs, favorites } = this.state;
    return(
    <div
      refs='gallery-container'
      className='container-fluid gallery-container'
    >
      <FavoritesGrid
        imgs={favorites}
        action={this.deleteFavoriteHandler}
      />
      <ImagesGrid
        imgs={imgs}
        action={this.addFavoriteHandler}
      />
      <LoadMore
        onLoadMore={this.loadMoreHandler}
      />
      <GalleryModal />
    </div>
    )
  }
 }

 export default Gallery;