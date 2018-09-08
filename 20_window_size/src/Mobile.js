import React, { Component } from 'react';
import {
  BrowserView,
  MobileView,
  osName,
  osVersion,
  browserName
} from "react-device-detect";

class Mobile extends Component {
  

  render() {
    return (
      <div>
        <p>Your os data: {browserName} {osName} {osVersion}</p>
        <BrowserView>
          <h1>Rendered only in browser</h1>
        </BrowserView>
        <MobileView>
          <h1>Rendered only on mobile</h1>
        </MobileView>
      </div>
    );
  }
}

export default Mobile;
