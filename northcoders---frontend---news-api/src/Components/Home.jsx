import React from "react";
import { Link } from "@reach/router";

const Home = () => {
  return (
    <div>
      <Link to="/">
        <img
          src="https://cdn-images-1.medium.com/max/184/1*LdnSztHVYhhd8K8EqlgCJQ@2x.png"
          alt="NC-Logo"
          height="70"
          width="70"
        />
      </Link>
    </div>
  );
};

export default Home;
