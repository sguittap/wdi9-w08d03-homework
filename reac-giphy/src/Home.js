import React, { Component } from 'react';
import './Home.css';
import HelloWorld from './HelloWorld/HelloWorld'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HelloWorld/>
      </div>
    );
  }
}

export default Home;
