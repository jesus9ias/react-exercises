import React from 'react';
import {
  Typography
} from '@material-ui/core';

export default (props) => <Typography variant="title" gutterBottom>
  {props.children}
</Typography>