import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/articles">
          <button>Articles</button>
        </Link>

        <Link to="/topics">
          <button>Topics </button>
        </Link>

        <Link to="/users">
          <button>Users</button>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
