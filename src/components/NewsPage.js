import React, { Component } from "react";

class NewsPage extends Component {
  render() {
    const { sport, articles, page, totalPages } = this.props;

    return (
      <div className="container mt-4">

        <button
          className="btn btn-secondary mb-3"
          onClick={this.props.goBack}
        >
          ← Back to Sports
        </button>

        <h2 className="text-center mb-4">
          {sport ? `${sport} News` : "Sports News"}
        </h2>

        <div className="row">
          {articles?.length === 0 && (
            <p className="text-center">No News Found</p>
          )}

          {articles?.map((a, i) => (
            <div key={i} className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">

                <img
                  src={a.urlToImage || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt="news"
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{a.title}</h5>
                  <p className="card-text">
                    {a.description || "No description available"}
                  </p>

                  <a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button
            disabled={page <= 1}
            className="btn btn-primary"
            onClick={this.props.handlePreviousClick}
          >
            &larr; Previous
          </button>

          <button
            disabled={page >= totalPages}
            className="btn btn-primary"
            onClick={this.props.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>

      </div>
    );
  }
}

export default NewsPage;