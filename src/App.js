   import React, { Component } from "react";
import Landing from "./components/Landing";
import SportsGrid from "./components/SportsGrid";
import NewsPage from "./components/NewsPage";   
   
   
   
   export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "landing",
      articles: []
    };
  }

  goToSports = () => {
    this.setState({ page: "sports" });
  };

  goToNews = (sport) => {
    fetch(`https://newsapi.org/v2/everything?q=${sport}&apiKey=8d92cd3a631448d48c2b699a4a9c0b54`)
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          page: "news",
          articles: data.articles
        });
      });
  };

  render() {
    return (
      <div>
        {this.state.page === "landing" && (
          <Landing goToSports={this.goToSports} />
        )}

        {this.state.page === "sports" && (
          <SportsGrid goToNews={this.goToNews} />
        )}

        {this.state.page === "news" && (
          <NewsPage articles={this.state.articles} />
        )}
      </div>
    );
  }
}