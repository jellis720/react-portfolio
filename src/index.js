import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from'./components/Contact';
import References from './components/References'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/Portfolio" component={Portfolio}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/References" component={References}/>
      </Switch>
    </BrowserRouter>

,document.getElementById('root'));
registerServiceWorker();
