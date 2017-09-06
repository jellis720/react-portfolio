import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class Home extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-lg">
          <h1 className="pageName">Josh Ellis</h1>
      </div>
      <div className="content">
        <div className="innerContent">
        <p>Thanks for stopping by! Take some time to look around and for further contact, check the links below!</p>
        </div>
      </div>
      </BaseLayout>
    );
  }
}
