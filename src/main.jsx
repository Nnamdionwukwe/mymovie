import { createRoot } from "react-dom/client";
import "./index.css";
// import { Apps } from "./Apps.jsx";
// import ContextProvider from "./Components/Features/ContextProvider.jsx";
import Home from "./Home.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <Apps /> */}
    <Home />
  </>
);
