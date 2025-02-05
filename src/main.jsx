import { createRoot } from "react-dom/client";
import "./index.css";
import { Apps } from "./Apps.jsx";
import ContextProvider from "./Components/Features/ContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Apps />
  </ContextProvider>
);
