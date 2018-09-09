import React from 'react';
import {
  Grid,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Title from './Title';
import GalleryImage from './GalleryImage';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const ImagesGrid = ({ classes, imgs, action, maxGallery, remove }) => {
  const images = maxGallery === 0 || imgs.length <= maxGallery ? imgs : imgs.slice(imgs.length - maxGallery);
  return (
    <div className={classes.root}>
      <Title>Images</Title>
      <Grid container spacing={24}>
        {
          images.map((img) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={img.id}>
                <GalleryImage
                  img={img}
                  remove={remove}
                  imageAction={action}
                  isFavorite={false}
                />
              </Grid>
            );
          })
        }
        {
          images.length === 0 ? (<Typography variant="caption" gutterBottom align="center">
            There is not images
          </Typography>) : null
        }
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ImagesGrid);