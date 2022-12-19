import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC<{}> = (): JSX.Element => {
  return (
    <div>
      <Link to="counter">Counter</Link>
      <Link to="users">Users</Link>
    </div>
  );
};

export default Nav;
