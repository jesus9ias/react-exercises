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

const FavoritesGrid = ({ classes, imgs, action, maxFavorites, remove }) => {
  const images = maxFavorites === 0 || imgs.length <= maxFavorites ? imgs : imgs.slice(imgs.length - maxFavorites);
  return (
    <div className={classes.root}>
      <Title>Favorites</Title>
      <Grid container spacing={24}>
        {
          images.map((img) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={img.id}>
                <GalleryImage
                  remove={remove}
                  img={img}
                  imageAction={action}
                  isFavorite={true}
                />
              </Grid>
            );
          })
        }
        {
          images.length === 0 ? (<Typography variant="caption" gutterBottom align="center">
            There is not favorite images
          </Typography>) : null
        }
      </Grid>
    </div>
  );
}

export default withStyles(styles)(FavoritesGrid);