import Nav from 'components/nav/Nav';
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeadTags from './HeadTags';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <React.Fragment>
      <HeadTags />
      <div className="app">
        <header className="app-header">
          <Nav />
        </header>
        <Outlet />
        <p style={{ display: 'none' }}>{process.env.REACT_APP_ENV_NAME}</p>
      </div>
    </React.Fragment>
  );
};

export default App;
