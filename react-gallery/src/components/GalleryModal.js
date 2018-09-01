import React from 'react';

const GalleryModal = (props) => {
  if (props.isOpen === false) {
  return null;
  }

  return (
    <div isOpen={props.isOpen} className='modal-overlay' onClick={props.onClick} name={props.name}>
      <div className='modal-body'>
      <a className='modal-close' href='#' onClick={props.onClick}><span className='fa fa-times'></span></a>
      <img src={props.src} alt="modal"/>
      </div>
    </div>
  );
}

export default GalleryModal;