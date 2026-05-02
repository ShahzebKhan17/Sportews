import React, { Component } from "react";

class NewsPage extends Component {
  render() {
    const { articles, goBack } = this.props;

    return (
      <div className="container mt-4">

        
        <button 
          className="btn btn-dark mb-3"
          onClick={goBack}
        >
          ← Back
        </button>

        <h2 className="text-center mb-4">Sports News</h2>

        <div className="row">
          {articles?.length === 0 && (
            <p className="text-center">No news found</p>
          )}

          {articles?.map((a, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              
              <div className="card h-100 shadow-sm">
                
                <img
                  src={a.urlToImage || "https://via.placeholder.com/300"}
                  className="card-img-top"
                  alt=""
                  style={{ height: "200px", objectFit: "cover" }}
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
      </div>
    );
  }
}

export default NewsPage;