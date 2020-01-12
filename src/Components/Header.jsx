import React from "react";
import Home from "./Home";
import Nav from "./Nav";

const Header = ({username}) => {
  return (
    <div className='Header'>
      <Home />
      <Nav />       
      <h2 className='Username'>Logged in as: {username}</h2>    
    </div>
  );
};

export default Header;
