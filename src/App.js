import React, { useState, useEffect } from 'react'
import axios from 'axios'
import APIData from './APIData';

function App() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        setPosts(res.data)})
        .catch(error=> console.log(error))
      },[]);
  return (
    <div className="frontData">
      <div className="data-container">
        <h1>Data from the API</h1>
      </div>
      <div className="frontData-details">
        <APIData 
          ID={posts.id}
          TITLE={posts.title}
          BODY={posts.body}/>
      </div>
    </div>
  )
}

export default App
