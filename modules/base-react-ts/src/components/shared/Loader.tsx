import React, { FC } from 'react';

const Loader: FC<{ isLoading: boolean }> = props => {
  if (props.isLoading) {
    return <h3>LOADING...</h3>;
  }
  return null;
};

export default Loader;
