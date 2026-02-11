import { useState } from "react";
import "./App.css";
import MainLayout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";

function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
