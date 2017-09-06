import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
