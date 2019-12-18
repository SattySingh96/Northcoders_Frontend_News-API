import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div> 
      <nav className='Nav'>
        <Link to="/articles">
          <button className='NavButtons'>Articles</button>
        </Link>

        <Link to="/topics">
          <button className='NavButtons'>Topics </button>
        </Link>

        <Link to="/users">
          <button className='NavButtons'>Users</button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
