import React, { useState, useEffect } from "react";
import axios from "axios";
import APIData from "./APIData";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/2`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const postFilters = posts.filter((posts) =>
  //   posts.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="frontData">
      <div className="data-container">
        <h1>Data from the API</h1>
        <form className="data-search">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="frontData-details">
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
      </div>
      <div className="frontData-details">
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
        <APIData className="apiData"
          ID={posts.id}
          BODY={posts.body}
          TITLE={posts.title}
        />
      </div>
    </div>
  );
}

export default App;
