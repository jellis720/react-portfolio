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
        <p className="innerContent">Check out some of these extremely real examples of my work. </p>
      </div>
      <div className="content">
        <a href="https://www.facebook.com"><img className="pageImage" src="https://idagram.files.wordpress.com/2012/12/skjermbilde-2012-12-09-kl-17-38-00.png" alt="image"/></a>
        <a href="https://giphy.com/search/i-got-ya"><img className="pageImage" src="http://i.imgur.com/6qRXik9.png" alt="image"/></a>
        <a href="http://www.spacex.com"><img className="pageImage" src="https://parkroad.co.za/sites/default/files/inline-images/spacex-screenshot-500.jpg" alt="image"/></a>
      </div>
      </BaseLayout>
    );
  }
}
