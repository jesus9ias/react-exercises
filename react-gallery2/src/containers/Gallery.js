import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  
  addFavoriteHandler = (id) => {
    const favorites = this.state.favorites;
    const imgs = this.state.imgs;
    /*  if (favorites.length <= 4) {
      
    } */
    const newFav = imgs.find((img) => img.id === id);;
    if (!favorites.find(img => img.id === newFav.id)) {
      const newFavs = [...favorites, newFav];
      const newImgs = imgs.filter((img) => img.id !== id);
      Storage.set('favorites', JSON.stringify(newFavs));
      Storage.set('images', JSON.stringify(newImgs));
      this.setState({
        favorites: newFavs,
        imgs: newImgs
      });
    }
  }

  deleteFavoriteHandler = (id) => {
    const image = this.state.favorites.find((img) => img.id === id);
    const favorites = this.state.favorites.filter((img) => img.id !== id);
    const imgs = [image, ...this.state.imgs];
    Storage.set('favorites', JSON.stringify(favorites));
    Storage.set('images', JSON.stringify(imgs));
    this.setState({
      favorites,
      imgs
    });
  }

  remove = (id) => {
    const favorites = this.state.favorites.filter(img => img.id !== id);
    const imgs = this.state.imgs.filter(img => img.id !== id);
    Storage.set('favorites', JSON.stringify(favorites));
    Storage.set('images', JSON.stringify(imgs));
    this.setState({
      favorites,
      imgs
    });
  }

  render() {
    const { imgs, favorites } = this.state;
    const { maxFavorites, maxGallery, useFavorites, useGallery } = this.props;
    return(
    <div
      refs='gallery-container'
      className='container-fluid gallery-container'
    >
      {
        useFavorites ? <FavoritesGrid
            imgs={favorites}
            remove={this.remove}
            maxFavorites={maxFavorites}
            action={this.deleteFavoriteHandler}
          />
        :
          null
      }
      {
        useGallery ? <ImagesGrid
            imgs={imgs}
            remove={this.remove}
            maxGallery={maxGallery}
            action={this.addFavoriteHandler}
          />
        :
          null
      }
      {
        useGallery ? <LoadMore
            onLoadMore={this.loadMoreHandler}
          />
        :
          null
      }
      <GalleryModal />
    </div>
    )
  }
 }

Gallery.propTypes = {
  maxFavorites: PropTypes.number,
  maxGallery: PropTypes.number,
  useFavorites: PropTypes.bool,
  useGallery: PropTypes.bool
};

Gallery.defaultProps = {
  maxFavorites: 0,
  maxGallery: 0,
  useFavorites: true,
  useGallery: true
};

 export default Gallery;