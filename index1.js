// import { createContext } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ComponentA from "./componentA";

// export const ComponentContext = createContext(null);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <ComponentContext.Provider value={{ name: "Jack" }}>
  //   <ComponentA />
  // </ComponentContext.Provider>
  <ComponentA />
);
