import { LinkProps } from '@mui/material';
import MuiLink from '@mui/material/Link';
import { Link as ReactRouterLink } from 'react-router-dom';

import React, { FC } from 'react';

const Link: FC<LinkProps> = props => {
  return (
    <MuiLink
      variant="button"
      {...props}
      component={ReactRouterLink}
      to={props.href ?? '#'}
    />
  );
};

export default Link;
