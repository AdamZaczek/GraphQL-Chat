import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ChannelsList = () =>
    (<ul className="item-list">
      <li>Channel 1</li>
      <li>Channel 2</li>
    </ul>);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Chat App</h2>
        </div>
        <ChannelsList />
      </div>
    );
  }
}
export default App;
