import React, { Component } from 'react';
import './Home.css';
import HelloWorld from './HelloWorld/HelloWorld'
import SearchContainer from './SearchContainer/SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HelloWorld/>
        <SearchContainer/>
      </div>
    );
  }
}

export default Home;
