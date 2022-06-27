import React from "react";
import Question from "./Question";
import questions from "../questions.js";

function FAQs() {
  return (
    <div className="p-4">
      <div className="container flex flex-col w-full gap-6 mx-auto shadow-lg p-6 max-w-2xl">
        {questions.map((q) => (
          <Question key={q.id} q={q} />
        ))}
      </div>
    </div>
  );
}

export default FAQs;
