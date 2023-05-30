import React, { Component } from 'react';
import Pdf from 'public/Resume.pdf';

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Resume</a>
        </div>
    );

  }
}

export default Download;
