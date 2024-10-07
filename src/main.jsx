import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskContexProvider from "./context/TaskContex.jsx";
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContexProvider>
      <App />
    </TaskContexProvider>
  </StrictMode>
);
