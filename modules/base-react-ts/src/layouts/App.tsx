import Nav from 'components/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="app">
      <header className="app-header">
        <Nav />
      </header>
      <Outlet />
      <p style={{ display: 'none' }}>{process.env.REACT_APP_ENV_NAME}</p>
    </div>
  );
};

export default App;
