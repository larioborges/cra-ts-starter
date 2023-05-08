import Button from '@mui/material/Button';
import { NavLinkProps, NavLink as RouterNavLink } from 'react-router-dom';

import React, { FC } from 'react';

const NavLink: FC<NavLinkProps> = props => {
  const children = props.children as React.ReactNode;
  return (
    <RouterNavLink {...props}>
      <Button variant="text">{children}</Button>
    </RouterNavLink>
  );
};

export default NavLink;
