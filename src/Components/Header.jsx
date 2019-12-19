import React from "react";
import Home from "./Home";
import Nav from "./Nav";

const Header = ({username}) => {
  return (
    <div className='Header'>
      <Home />
      <Nav />
      Logged in as: {username}
    </div>
  );
};

export default Header;
