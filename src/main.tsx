import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "@/routes/index.tsx";

import { Toaster } from "sonner";

import "@/styles/index.css";
import { ReduxProvider } from "./redux/reduxProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider>
      <Toaster />
      <div className="w-full mx-auto p-0 m-0 h-screen overflow-hidden">
        <Routes />
      </div>
    </ReduxProvider>
  </React.StrictMode>
);
