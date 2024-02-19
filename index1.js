import { createRoot } from "react-dom/client";
import React from "react";
import Home from "./home";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Home />);
