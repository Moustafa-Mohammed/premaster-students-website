import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-purple-600">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<List />} />
        <Route path="subjects" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
