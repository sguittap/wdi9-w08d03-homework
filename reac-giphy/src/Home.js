import React, { Component } from 'react';
import './Home.css';
import HelloWorld from './HelloWorld/HelloWorld'
import Search from './Search/Search'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HelloWorld/>
        <Search/>
      </div>
    );
  }
}

export default Home;
