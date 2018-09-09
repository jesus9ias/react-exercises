import React from 'react';
import {
  Button
} from '@material-ui/core';

const LoadMore = (props) => {
  return <Button onClick={props.onLoadMore}>Load more</Button>
}

export default LoadMore;