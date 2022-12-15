import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/App";

import "./styles.css";

import type { Root } from "react-dom/client";

const rootElement: HTMLElement = document.getElementById("root");
const root: Root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
