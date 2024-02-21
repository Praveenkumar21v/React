import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ComponentA from "./componentA";
//propdrilling
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ComponentA dataProp={"Jack"} />
  </StrictMode>
);
