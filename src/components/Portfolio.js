import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class Portfolio extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-md">
          <h1 className="pageName">My Work</h1>
      </div>
      <div className="content">
        <p className="innerContent">Check out some of these extremely real examples of websites that I have designed. </p>
      </div>
      <div className="content">
        <img src="http://www.ndstudies.gov/sites/default/file/blank-flag.gif" alt="image"/>
        <img src="http://www.ndstudies.gov/sites/default/file/blank-flag.gif" alt="image"/>
        <img src="http://www.ndstudies.gov/sites/default/file/blank-flag.gif" alt="image"/>
      </div>
      </BaseLayout>
    );
  }
}
