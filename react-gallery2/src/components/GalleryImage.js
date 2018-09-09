import React, { Component } from 'react';
import {
  Card,
  Icon,
  Menu,
  Button,
  Avatar,
  MenuItem,
  CardMedia,
  CardHeader,
  IconButton,
  CardActions,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import '../styles/imageButton.css';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    cursor: 'pointer',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
  primary: {},
  icon: {}
};

class GalleryImage extends Component {
  state = {
    isOpenMenu: false,
    anchorEl: null
  };

  openModal = (image) => {
    console.log(image);
    global.eventHub.emit('openModal', image);
  }

  openMenu = (target) => {
    this.setState({
      isOpenMenu: true,
      anchorEl: target
    });
  }

  closeMenu = () => {
    this.setState({
      isOpenMenu: false,
      anchorEl: null
    });
  }

  download = (url) => {
    const win = window.open(url, '_blank');
    win.focus();
  }

  renderMenu = () => {
    const { classes, img, remove } = this.props;
    const { isOpenMenu, anchorEl } = this.state;
    const id = img.id;
    return (
      <React.Fragment>
        <Button
          aria-owns={isOpenMenu ? `gallery_menu_${id}` : null}
          aria-haspopup="true"
          onClick={event => {
            this.openMenu(event.currentTarget);
          }}
        >
          <Icon>more_vert</Icon>
        </Button>
        <Menu
          id={`gallery_menu_${id}`}
          anchorEl={anchorEl}
          open={isOpenMenu}
          onClose={this.closeMenu}
        >
          <MenuItem onClick={() => this.download(img.links.download)}>
            <ListItemIcon className={classes.icon}>
              <Icon>cloud_download</Icon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Download" />
          </MenuItem>
          <MenuItem onClick={() => remove(img.id)}>
            <ListItemIcon className={classes.icon}>
              <Icon>delete</Icon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Remove" />
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }

  renderAvatar = () => {
    const { classes, img } = this.props;
    return (
      <Avatar
        aria-label="Recipe"
        className={classes.avatar}
        src={img.user.profile_image.small}
      >
        R
      </Avatar>
    );
  }

  render() {
    const { classes, img, imageAction, isFavorite } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={this.renderAvatar()}
          action={this.renderMenu()}
          title={img.user.first_name}
          subheader={img.user.location}
        />
        <CardMedia
          className={classes.media}
          image={img.urls.thumb}
          title="Gallery photo"
          onClick={() => this.openModal(img)}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites" onClick={() => imageAction(img.id)}>
            <Icon color={isFavorite ? 'primary' : 'inherit'}>favorite</Icon>
          </IconButton>
          <Button aria-label="Total views">
            <Icon>remove_red_eye</Icon>
            {img.views}
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(GalleryImage);