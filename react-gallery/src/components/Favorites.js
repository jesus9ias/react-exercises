import React from 'react';
import GalleryImage from './GalleryImage';

const Favorites = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <h4>Favorites</h4>
      </div>
      <div className="row mx-auto">
        {
          props.imgs.map((img, index) => {
            return <GalleryImage img={img} index={index} key={img.id} favoriteAction={props.deleteFavorite}  btnClass="btn-warning" icon="fa-times"/>
          })
        }
      </div>
      </div>
  );
}

export default Favorites;