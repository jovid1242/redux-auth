import React from "react";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
