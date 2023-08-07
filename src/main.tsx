import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalReset } from "./styles/reset.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <>
      <React.StrictMode>
         <BrowserRouter>
            <GlobalReset />
            <App />
         </BrowserRouter>
      </React.StrictMode>
   </>
);
