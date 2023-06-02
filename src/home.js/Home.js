import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="category-container">
      {data &&
        data.map((data, id) => (
          <div key={data.id}>
            <div class="card">
              <img src={data.show.image.medium} alt="John" />
              <h1>{data.show.name}</h1>
              <p class="title">{data.show.language}</p>
              <div className="summary">
              <p>{data.show.summary}</p>
              </div>
                 
                  <button>
<Link  style={{ textDecoration:'none' }}to = {`/book/${data.show.name}`}>Book Movie</Link>
                  </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
