import React from 'react';
import ImageLoader from 'react-load-image';

const spinner = "https://loading.io/spinners/fidget-spinner/lg.fidget-spinner.gif";

export default (props) => <ImageLoader
  src={props.openModal ? props.image.urls.thumb : props.image.urls.full }
>
  {
    props.openModal ? (<img
      onClick={() => props.openModal(props.image)}
      className="card-img-top"
      alt="gallery"
    />) : <img width="800px" alt="modal" />
  }
  <div>Error!</div>
  <img src={spinner} alt="preloader" />
</ImageLoader>
