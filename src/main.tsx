import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import MonumentsContextProvider from "./monument/context/MonumentsContextProvider";
import "@fontsource-variable/lexend/index.css";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MonumentsContextProvider>
        <AppRouter />
      </MonumentsContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
