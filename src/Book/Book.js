import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./book.css";

const Book = () => {
  const { name } = useParams();

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (name.length <= 5 || "") {
      alert("Please Enter Full Name");
    }else if(number <11){
      alert("enter full Number");
    }

    console.log("Form submitted");
    setEmail("");

    setNumber("");
  };

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all}")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="Register-Container">
      <div className="Heading">
        <h2>BOOK MOVIE</h2>
        <h2>{name}</h2>
        <img src="" alt="" />
      </div>
      <form onSubmit={handleSubmit}>
      

        <div className="form-group">
          <label>Email:</label>
          <input
            className="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Number:</label>
          <input
            className="number"
            type="string"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button value="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Book;
