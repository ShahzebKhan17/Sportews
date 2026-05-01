import React, { Component } from 'react';
import '../styles/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="overlay">
          <div className="content">
            <h1>SPORTEWS</h1>
            <p>All Sports. All News. All Here.</p>
            <button className="btn" onClick={this.props.goToSports}>
  Explore News
</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;