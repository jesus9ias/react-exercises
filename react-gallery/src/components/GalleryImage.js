import React from 'react';

const GalleryImage = (props) => {
  return (
    <div className='mb-3 mx-1' key={props.index}>
      <div className='card'>
        <img className="card-img-top" src={props.img.urls.thumb} alt="img"/>
        <button onClick={() => props.favoriteAction(props.index)} className={`btn ${props.btnClass} btn-block`}>
          <i className={`fa ${props.icon}`} aria-hidden="true"></i>
        </button>
      {/* <i className='card-icon-open fa fa-expand' value={img} onClick={(e) => this.openModal(img, e)}></i> */}
      </div>
    </div>
  )
 }

 export default GalleryImage;