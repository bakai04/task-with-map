import React from 'react';
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/main";
import "./shared/styles/global.css";

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
