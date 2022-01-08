import React from 'react';
// Style
import './BbcApp.scss';
// Components
import {BbcHome} from "./BbcHome/BbcHome";
// Constants
import {app} from '../services/contants/textContent'

function BbcApp() {
  return (
    <div className="blablacar-app">
      <header className="blablacar-app__header">
        <h1>{app.title}</h1>
      </header>
      <BbcHome/>
    </div>
  );
}

export default BbcApp;
