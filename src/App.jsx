import React from "react";
import { Routes, Route } from "react-router-dom";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";
import students, { doctors } from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<List items={students} />} />
        <Route path="subjects" element={<List items={doctors} />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="GPA" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
