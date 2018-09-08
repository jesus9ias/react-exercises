import React from 'react';
import Preloader from './Preloader';
import '../styles/imageButton.css';

const openModal = (image) => {
  console.log(image)
  global.eventHub.emit('openModal', image);
}

const GalleryImage = (props) => {
  return (
    <div className='mb-3 mx-1' key={props.index}>
      <div className='card'>
        <Preloader openModal={openModal} image={props.img} />
        <button
          onClick={() => props.imageAction(props.index)}
          className={`btn btn-image ${props.btnClass} btn-block`}
        >
          <span>
            <i className={`fa ${props.icon}`} aria-hidden="true"></i>
          </span>
          <span>
            <i className={`fa fa-eye`} aria-hidden="true"></i>{props.img.views}
          </span>
        </button>
      </div>
    </div>
  )
 }

 export default GalleryImage;