import React from 'react';
import Helmet from 'react-helmet';

const HeadTags: React.FC<{}> = (): JSX.Element => {
  return (
    <Helmet>
      <title>Lario React Starter</title>
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
      />
    </Helmet>
  );
};

export default HeadTags;
