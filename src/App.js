import React, { Component } from "react";
import Landing from "./components/Landing";
import SportsGrid from "./components/SportsGrid";
import NewsPage from "./components/NewsPage";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pageView: "landing",
      articles: [],
      page: 1,
      totalPages: 1,
      currentSport: ""
    };
  }
  goToSports = () => {
    this.setState({ pageView: "sports" });
  };

  goToNews = (sport) => {
    this.setState(
      {
        pageView: "news",
        currentSport: sport,
        page: 1
      },
      () => this.fetchNews()
    );
  };
  goToLanding = () => {
    this.setState({ pageView: "landing" });
};

goToSportsPage = () => {
  this.setState({ pageView: "sports" });
};
fetchNews = async () => {
  const { currentSport, page } = this.state;
  const API_KEY = process.env.REACT_APP_API_KEY;
      console.log("API KEY:", API_KEY);

    let url = `https://newsapi.org/v2/everything?q=${currentSport}&page=${page}&pageSize=6&apiKey=${API_KEY}`;

    let res = await fetch(url);
    let data = await res.json();

    this.setState({
      articles: data.articles || [],
      totalPages: Math.ceil((data.totalResults || 0) / 6)
    });
  };

  
  handlePreviousClick = () => {
    this.setState(
      (prev) => ({ page: prev.page - 1 }),
      this.fetchNews
    );
  };

  
  handleNextClick = () => {
    this.setState(
      (prev) => ({ page: prev.page + 1 }),
      this.fetchNews
    );
  };

  render() {
    return (
      <div>
        {this.state.pageView === "landing" && (
          <Landing goToSports={this.goToSports} />
        )}

        {this.state.pageView === "sports" && (
          <SportsGrid goToNews={this.goToNews} 
           goBack={this.goToLanding} 
          />
        )}

        {this.state.pageView === "news" && (
          <NewsPage
          sport={this.state.currentSport}
            articles={this.state.articles}
            page={this.state.page}
            totalPages={this.state.totalPages}
            handlePreviousClick={this.handlePreviousClick}
            handleNextClick={this.handleNextClick}
            goBack={this.goToSportsPage}
          />
        )}
      </div>
    );
  }
}