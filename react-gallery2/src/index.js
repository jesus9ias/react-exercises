import React from 'react';
import ReactDOM from 'react-dom';
import { EventEmitter } from 'fbemitter';
import './styles/index.css';
import Root from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

global.eventHub = new EventEmitter();

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
