import React from 'react';
import Title from './Title';
import Section from './Section';
import GalleryImage from './GalleryImage';

const ImagesGrid = (props) => {
  return (
    <div className="row">
      <Title>Images</Title>
      <Section>
        {
          props.imgs.map((img, index) => {
            return <GalleryImage img={img} index={index} key={img.id} imageAction={props.action} btnClass="btn-danger" icon="fa-heart"/>
          })
        }
        {
          props.imgs.length === 0 ? <p>No Images</p> : null
        }
      </Section>
    </div>
  );
}

export default ImagesGrid;