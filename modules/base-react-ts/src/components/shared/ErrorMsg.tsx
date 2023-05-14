import React, { FC } from 'react';

const ErrorMsg: FC<{ isError: boolean; errorMsg?: string }> = ({
  isError,
  errorMsg = 'An unexpected error has occurred',
}) => {
  if (isError != null && isError) {
    return <h3>{errorMsg}</h3>;
  }
  return null;
};

export default ErrorMsg;
