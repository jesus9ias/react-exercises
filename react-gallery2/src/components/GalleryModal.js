import React, { Component } from 'react';
import Preloader from './Preloader';

class GalleryModal extends Component {
  state = {
    isOpen: false,
    image: null
  }

  componentDidMount() {
    global.eventHub.addListener('openModal', (image) => {
      this.setState({
        image,
        isOpen: true
      });
    });
  }

  close = () => {
    this.setState({
      isOpen: false
    });
  }

  modal = () => {
    const {
      description,
      likes,
      downloads
    } = this.state.image;
    return (
      <div className='modal-overlay'>
        <div className='modal-body'>
          <a className='modal-close' onClick={this.close}><span className='fa fa-times'></span></a>
          <Preloader image={this.state.image} />
          <p>{description}</p>
          <p><i className={'fa fa-thumbs-up'} aria-hidden="true"></i> {likes}</p>
          <p><i className={'fa fa-download'} aria-hidden="true"></i> {downloads}</p>
        </div>
      </div>
    )
  }

  render() {
    return this.state.isOpen ? this.modal() : null;
  }
}

export default GalleryModal;