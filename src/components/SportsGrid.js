import React, { Component } from "react";
import "../styles/SportsGrid.css";
class SportsGrid extends Component {
  constructor() {
    super();
    this.state = {
      sports: [
        "Football", "Cricket", "Tennis", "Basketball",
        "Hockey", "Baseball", "Badminton", "Kabaddi",
        "Volleyball", "Wrestling", "Golf"
      ],
      search: ""
    };
  }

  handleClick = (sport) => {
    this.props.goToNews(sport);
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSearchSubmit = () => {
    this.props.goToNews(this.state.search);
  };

  render() {
    return (
      <div className="grid-container mt-5" style={{ marginTop: "5vh", padding: "50px" }}>

        {this.state.sports.map((sport, index) => (
          <div
            key={index}
            className="card"
            onClick={() => this.handleClick(sport)}
          >
            {sport}
          </div>
        ))}

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