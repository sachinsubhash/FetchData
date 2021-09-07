import React, { useState, useEffect } from "react";
import axios from "axios";
import APIData from "./APIData";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const postsFilters = posts.filter((posts) =>
    posts.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="frontData">
      <div className="data-container">
        <h1>Data from the API</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {postsFilters.map((posts) => {
        return (
          <div className="frontData-details">
            <APIData ID={posts.id} BODY={posts.body} TITLE={posts.title} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
