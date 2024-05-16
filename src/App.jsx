import React from "react";
import UI from "./components/UI";
import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="relative">
      <ThemeContextProvider>
        <UI />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;