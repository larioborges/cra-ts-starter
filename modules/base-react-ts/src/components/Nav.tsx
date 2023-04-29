import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink
            // variant="button"
            color="text.primary"
            // href="#"
            to="counter"
            // sx={{ my: 1, mx: 1.5 }}
          >
            Counter
          </NavLink>
          <NavLink
            // variant="button"
            color="text.primary"
            // href="#"
            to="users"
            // sx={{ my: 1, mx: 1.5 }}
          >
            Users
          </NavLink>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
