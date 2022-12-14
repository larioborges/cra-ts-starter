import React from 'react';
import './App.css';
import AppCounter from './components/Counter/AppCounter';
import logo from './logo.svg';

const App: React.FC<{}> = (): JSX.Element => {
  return (
    <div className="app">
      <header className="app-header">
        <img
          src={logo}
          className="app-logo"
          alt="logo"
        />
        <AppCounter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>{process.env.REACT_APP_ENV_NAME}</p>
    </div>
  );
};

export default App;
