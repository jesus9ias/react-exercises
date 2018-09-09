import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SideNav from './SideNav';

const innerStyles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButtonLeft: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuButtonRight: {
    marginLeft: 20,
    marginRight: -12,
  },
};

class Header extends Component {
  state = {
    isOpenSideNav: false
  }

  toggleDrawer = () => {
    this.setState({
      isOpenSideNav: !this.state.isOpenSideNav
    });
  }

  goTo = (page) => {
    this.props.history.push(page);
    this.toggleDrawer();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButtonLeft}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Gallery App
            </Typography>
            <IconButton
              className={classes.menuButtonRight}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.props.history.push('/profile')}
            >
              <Icon>person</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <SideNav
          isOpen={this.state.isOpenSideNav}
          toggleDrawer={this.toggleDrawer}
          goTo={this.goTo}
        />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(innerStyles)(withRouter(Header));