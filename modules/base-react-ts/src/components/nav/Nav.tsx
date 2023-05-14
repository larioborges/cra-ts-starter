import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import NavLink from './NavLink';

const Nav: React.FC<{}> = (): JSX.Element => {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          React Starter
        </Typography>
        <nav>
          <NavLink to="counter">Counter</NavLink>
          <NavLink to="users">Users</NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
