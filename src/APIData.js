import React from "react";
import "./APIData.css";

const APIData = ({ ID, TITLE, BODY }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <div className="image-container">
            <img src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" />
          </div>
          <h3>Product</h3>
        </div>
        <div className="card-body">
            <h1>{ID}</h1>
            <p>{BODY}</p>
        </div>
        <div className="btn btn-default">
          <button>
            <a>View More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default APIData;
