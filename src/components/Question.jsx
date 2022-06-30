import React from "react";

function Question({ q }) {
  const { question, answer } = q;
  return (
    <details className="text-purple-900 open:bg-purple-900 open:text-white open:ring-1  open:shadow-lg p-6 rounded-lg cursor-pointer">
      <summary className="text-xl leading-6 font-semibold select-none">
        {question}
      </summary>
      <div className="mt-3 text-lg leading-6">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default Question;
