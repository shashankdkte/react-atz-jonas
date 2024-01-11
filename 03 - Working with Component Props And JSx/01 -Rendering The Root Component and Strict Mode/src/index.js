import { StrictMode }, React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App()
{
  return (
    <h1>App</h1>
  )
}


root.render(
  <StrictMode>
    <App />
  </StrictMode>
)