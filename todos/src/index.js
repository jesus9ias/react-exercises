import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'fbemitter';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

global.eventHub = new EventEmitter();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
