import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import BaseLayout from './BaseLayout';

export default class Contact extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-md">
          <h1 className="pageName">Reach Out!</h1>
      </div>
      <div className="content">
        <p>Feel free to reach out at the links below</p>
      </div>
      <div className="content">
        <div className="innerContent">
              <a href="https://github.com/jellis720" className="sociallink"><img className="linkImage" src="https://cdn2.iconfinder.com/data/icons/social-aquiocons/512/Aquicon-Github.png" alt="gh"/></a>
              <a href="https://www.facebook.com/joshrellis" className="sociallink"><img className="linkImage" src="http://blog.websitetemplates.bz/wp-content/uploads/2011/11/097996-black-paint-splatter-icon-social-media-logos-facebook-logo.png" alt='facebook'/></a>
              <a href="https://www.instagram.com/whysojellis" className="sociallink"><img className="linkImage" src="https://i.pinimg.com/originals/4d/79/4f/4d794ff2191bc6c2a822f910e706ac89.png" alt="insta"/></a>
        </div>
      </div>
      </BaseLayout>
    );
  }
}
