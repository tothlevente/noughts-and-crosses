import { CharactersProvider } from "./context/CharactersContext.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./css/index.css";
import "./ i18n.ts";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </StrictMode>
);
