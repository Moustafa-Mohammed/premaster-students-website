import React from "react";
import Question from "./Question";
import questions from "../questions.js";

function FAQs() {
  return (
    <div className="container h-screen flex flex-col w-full gap-6 mx-auto">
      {questions.map((q) => (
        <Question key={q.id} q={q} />
      ))}
    </div>
  );
}

export default FAQs;
