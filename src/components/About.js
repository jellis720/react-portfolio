import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class About extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-md">
          <h1 className="pageName">Get to Know Me!</h1>

      </div>
      <div className="content">
        <div className="innerContent">
        <p>After watching the world pass me by for far too long, I decided it was time for a change. I left the world of 9-5 customer service/sales and decided to take my life in a new direction. While looking for a way out of the every day routine, I discovered a place called The Iron Yard. Specializing in software development, they offered a 16 crash-course on both front AND back end development. SOLD. While I learned the necessary skills for both, my passions lie on the front-end side. Using CSS3, HTML5, JavaScript and React, I am capable of making not only professional but fully-functional websites and web-based applications. Combine this with my flair for the creative and I hit the ground running. Now, here I am looking for new opportunites and exciting new challenges. Be sure to check out the contact page if you would like to work together to make YOUR dream site come true!</p>
        </div>
      </div>
      </BaseLayout>
    );
  }
}
