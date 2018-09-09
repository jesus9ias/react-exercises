import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Dialog,
  Button,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  withMobileDialog
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Preloader from './Preloader';

const styles = {
  titleBlock: {
    display: 'flex'
  },
  titleText: {
    padding: 10,
    flex: 1,
    height: 55
  },
  titleIcon: {
    margin: 10
  }
};

class GalleryModal extends Component {
  state = {
    isOpen: false,
    image: null,
    quality: 1
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

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  isQuality = (quality) => {
    return this.state.quality === quality ? 'primary' : 'inherit';
  }

  setQuality = (quality) => {
    this.setState({
      quality
    });
  }

  imageToUse = () => {
    const { image, quality } = this.state;
    return quality === 1 ? image.urls.thumb :
      quality === 2 ? image.urls.small :
        image.urls.full;
  }

  render() {
    const { fullScreen, classes } = this.props;
    const { isOpen, image } = this.state;
    return isOpen ? (
        <Dialog
          fullScreen={fullScreen}
          open={this.state.isOpen}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div className={classes.titleBlock}>
            <DialogTitle id="responsive-dialog-title" className={classes.titleText}>{image.user.first_name}'s photo</DialogTitle>
            <Icon onClick={() => this.setQuality(1)} color={this.isQuality(1)} className={classes.titleIcon}>filter_1</Icon>
            <Icon onClick={() => this.setQuality(2)} color={this.isQuality(2)} className={classes.titleIcon}>filter_2</Icon>
            <Icon onClick={() => this.setQuality(3)} color={this.isQuality(3)} className={classes.titleIcon}>filter_3</Icon>
          </div>
          <DialogContent>
            <Preloader image={image} url={this.imageToUse()} />
            <Typography color="textSecondary">
              {image.description}
            </Typography>
            <Typography color="textSecondary">
              <Icon>star_rate</Icon> {image.likes}
            </Typography>
            <Typography color="textSecondary">
              <Icon>get_app</Icon> {image.downloads}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )
    :
      null
  }
}

GalleryModal.propTypes = {
  fullScreen: PropTypes.bool,
};

const componentStylized = withStyles(styles)(GalleryModal);

export default withMobileDialog()(componentStylized);
