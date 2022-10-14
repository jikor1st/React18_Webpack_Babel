import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

// react18 버전 root 렌더
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
