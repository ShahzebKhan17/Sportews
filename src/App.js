import './App.css';
import React, { Component } from 'react';
import Landing from './components/Landing';
import SportsGrid from './components/SportsGrid';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "landing"
    };
  }

  goToSports = () => {
    this.setState({ page: "sports" });
  };

  render() {
    return (
      <div>
        {this.state.page === "landing" && (
          <Landing goToSports={this.goToSports} />
        )}

        {this.state.page === "sports" && (
          <SportsGrid />
        )}
      </div>
    );
  }
}