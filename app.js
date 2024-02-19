import React, { useState } from "react";

const App = ({ handleParent }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    handleParent(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};
export default App;
