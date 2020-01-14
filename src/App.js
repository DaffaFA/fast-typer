import React from 'react';
import TyperContextProvider from './contexts/TyperContext';
import TyperForm from './components/TyperForm';
import logo from './logo.svg';
import 'bulma/css/bulma.min.css';
import './App.css';
import TyperDisplay from './components/TyperDisplay';

const App = () => (
  <TyperContextProvider>
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
        <img src={logo} className="App-logo" style={{display: 'block', width: '200px', margin: '0 auto'}} alt=""/>
          <div className="content box">
            <div className="content">
              <TyperDisplay />
            </div>
            <TyperForm />
          </div>
        </div>
      </div>
    </div>
  </TyperContextProvider>
);

export default App;