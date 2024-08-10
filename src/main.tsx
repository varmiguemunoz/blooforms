import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "@/routes/index.tsx";

import { Toaster } from "sonner";

import "@/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <div className="w-full mx-auto p-0 m-0 h-screen overflow-hidden">
      <Routes />
    </div>
  </React.StrictMode>
);
