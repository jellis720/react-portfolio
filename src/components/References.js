import React, { Component } from 'react';
import BaseLayout from './BaseLayout';

export default class About extends Component {

  render() {
    return (
      <BaseLayout>
      <div className="jumbotron title-md">
          <h1 className="pageName">Check Up On Me!</h1>
      </div>
      <div className="content">
        <div className="innerContent">
          <ul className="refs">
            <li className="singleRef">Previous Employers:</li>
            <li className="singleRef">Mark Zuckerberg <a className="refLink" href="https://www.facebook.com">Website</a></li>
            <li className="singleRef">Robert Herjavec <a className="refLink" href="https://www.robertherjavec.com/">Website</a></li>
            <li className="singleRef">Elon Musk <a className="refLink" href="http://www.spacex.com//">Website</a></li>
            <li className="singleRef">Greatest Teacher Ever: </li>
            <li className="singleRef">Lexi Namer <a className="refLink" href="http://www.lexinamer.com/">Website</a></li>
          </ul>
        </div>
      </div>
      </BaseLayout>
    );
  }
}
