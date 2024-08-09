import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Toaster } from "sonner";

import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
