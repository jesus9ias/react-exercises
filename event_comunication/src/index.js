import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'fbemitter';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

global.eventHub = new EventEmitter();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
