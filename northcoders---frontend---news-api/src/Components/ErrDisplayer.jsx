import React from "react";

const ErrDisplayer = ({ err }) => {
  const msg = err ? err : "Page not found";
  return <h5>{msg}</h5>;
};

export default ErrDisplayer;
