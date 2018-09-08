import React from 'react';

const LoadMore = (props) => {
  return (
    <div className="row mb-2">
      <div className="mx-auto">
        <button onClick={props.onLoadMore} className="btn btn-primary">Load more</button>
      </div>
    </div>
  );
}

export default LoadMore;