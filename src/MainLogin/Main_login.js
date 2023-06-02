import React,{useEffect} from "react";
import "./main_login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Main_login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

useEffect(() => {
  localStorage.setItem("name",JSON.stringify(name))
}, [name]);
useEffect(() => {
  localStorage.setItem("email",JSON.stringify(email))
}, [email]);
useEffect(() => {
  localStorage.setItem("password",JSON.stringify(password))
}, [password]);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    if (name.length <= 5) {
      alert("Please Enter Full Name");
    } else if (password.length <= 8 || "") {
      alert("Enter Password Full");
    } else {
    }

    console.log("Form submitted");
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="Login-Container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="fName"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>password:</label>
          <input
            className="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button value="submit"   type="submit">
          <Link to='/'>Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default Main_login;
