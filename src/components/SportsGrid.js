import React, { Component } from 'react';
import '../styles/SportsGrid.css';


class SportsGrid extends Component {
  constructor() {
    super();
    this.state = {
      sports: [
        "Football", "Cricket", "Tennis", "Basketball",
        "Hockey", "Baseball", "Badminton", "Kabaddi",
        "Formula 1", "Wrestling", "Golf"
      ],
      search: ""
    };
  }

  handleClick = (sport) => {
    console.log("Selected sport:", sport);

    // 👉 later you can navigate or fetch API here
    // example: this.props.navigate(`/news/${sport}`)
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearchSubmit = () => {
    console.log("Search sport:", this.state.search);
  };

  render() {
    return (
      <div className="grid-container mt-5" style={{ marginTop: "5vh",padding: "50px" }}>

        {this.state.sports.map((sport, index) => (
          <div
            key={index}
            className="card"
            onClick={() => this.handleClick(sport)}
          >
            {sport}
          </div>
        ))}

        {/* 🔍 Last Card - Search */}
        <div className="card search-card">
          <input
            type="text"
            placeholder="Search sport..."
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
          <button onClick={this.handleSearchSubmit}>PLAY</button>
        </div>

      </div>
    );
  }
}

export default SportsGrid;