import React, { useState } from "react";
import App from "./App";

const home = ({ handleChange }) => {
  const [name, setName] = useState("");

  const handleParent = (value) => {
    setName(value);
  };

  return (
    <div>
      <h1>Name from parent : {name}</h1>
      <App handleParent={handleParent} />
    </div>
  );
};
export default home;
