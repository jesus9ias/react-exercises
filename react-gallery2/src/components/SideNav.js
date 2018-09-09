import React from 'react';
import { withRouter } from 'react-router-dom'
import {
  Icon,
  Drawer,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';

const SideNav = ({ isOpen, toggleDrawer, goTo }) => <Drawer
  open={isOpen}
  onClose={toggleDrawer}
>
  <IconButton
    tabIndex={0}
    role="button"
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
  >
    <Icon>close</Icon>
  </IconButton>
  <div>
    <ListItem button onClick={() => goTo('/')}>
      <ListItemIcon>
        <Icon>home</Icon>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button onClick={() => goTo('/favorites')}>
      <ListItemIcon>
        <Icon>favorite</Icon>
      </ListItemIcon>
      <ListItemText primary="Favorites" />
    </ListItem>
    <ListItem button onClick={() => goTo('/gallery')}>
      <ListItemIcon>
        <Icon>photo</Icon>
      </ListItemIcon>
      <ListItemText primary="Gallery" />
    </ListItem>
  </div>
</Drawer>

export default withRouter(SideNav);