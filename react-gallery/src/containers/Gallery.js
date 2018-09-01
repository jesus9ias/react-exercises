import React, { Component } from 'react';
import GalleryImage from '../components/GalleryImage';
// import GalleryModal from '../components/GalleryModal';
import Button from '../components/Button';
import GalleryService from '../services/GalleryService';
import Favorites from '../components/Favorites';

class Gallery extends Component{
  constructor(props) {
   super(props);  
   this.state = {
    showModal: false,
    url: '',
    imgs: [],
    favorites: []
   }
   this.loadMoreHandler = this.loadMoreHandler.bind(this);
   this.addFavoriteHandler = this.addFavoriteHandler.bind(this);
   this.deleteFavoriteHandler = this.deleteFavoriteHandler.bind(this);
  //  this.openModal = this.openModal.bind(this);  
  //  this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    let imgs = JSON.parse(localStorage.getItem('images'));
    let favs = JSON.parse(localStorage.getItem('favorites'));
    if (!imgs) {
      imgs = await GalleryService.getImages();
      localStorage.setItem('images', JSON.stringify(imgs));
    } else {
    }
    this.setState({
      imgs,
      favorites: favs || []
    });
  }

  async loadMoreHandler() {
    const imgs = await GalleryService.getImages();
    localStorage.setItem('images', JSON.stringify(imgs));
    this.setState({
      imgs
    });
  }
  
  addFavoriteHandler(index) {
    if (this.state.favorites.length <= 4) {
      const newFav = this.state.imgs[index];
      if (!this.state.favorites.find(img => img.id === newFav.id)) {
        const newFavLS = JSON.stringify([...this.state.favorites, newFav]);
        localStorage.setItem('favorites', newFavLS);
        this.setState({
          favorites: [...this.state.favorites, newFav]
        })
      }
    }
  }

  deleteFavoriteHandler(index){
    const copyFavs = [...this.state.favorites];
    copyFavs.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(copyFavs));
    this.setState({
      favorites: copyFavs
    });
  }

  // openModal(url, e) {
  //   this.setState({
  //    showModal: true,
  //    url: url.urls.regular
  //   })
  //  };
  
  //  closeModal() {
  //   this.setState({
  //     showModal: false,
  //     url: ''
  //   })
  //  }

  render() {
    const { imgs, favorites } = this.state;
    return(
    <div refs='gallery-container' className='container-fluid gallery-container'>
      <Favorites imgs={favorites} deleteFavorite={this.deleteFavoriteHandler}/>
      <Button onLoadMore={this.loadMoreHandler}/>
      <div className="row justify-content-center">
        {
          imgs.map((img, index) => {
          return <GalleryImage img={img} index={index} key={img.id} favoriteAction={this.addFavoriteHandler} btnClass="btn-danger" icon="fa-heart"/>
          })
        }
      </div>    
      {/* <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />  */}
    </div>
    )
  }
 }

 export default Gallery;