import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { getCurrentTheme } from "./functions/getCurrentTheme";

const theme = getCurrentTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main
        className={`text-foreground bg-background min-h-screen ${theme}`}
      >
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
