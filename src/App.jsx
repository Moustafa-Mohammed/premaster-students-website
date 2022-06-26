import React from "react";
import { Routes, Route } from "react-router-dom";
import FAQs from "./components/FAQs";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<List />} />
        <Route path="subjects" element={<List />} />
        <Route path="faqs" element={<FAQs />} />
      </Routes>
    </div>
  );
}

export default App;
