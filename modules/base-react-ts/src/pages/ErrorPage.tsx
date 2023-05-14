import React from 'react';

const ErrorPage: React.FC<{}> = (): JSX.Element => {
  return (
    <React.Fragment>
      <h1>There has been an unexpected error</h1>
      <h2>If the problem persists please contact us to resolve the issue.</h2>
    </React.Fragment>
  );
};

export default ErrorPage;
