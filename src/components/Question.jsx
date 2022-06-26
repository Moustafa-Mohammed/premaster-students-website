import React from "react";

function Question({ q }) {
  const { question, answer } = q;
  return (
    <details class="text-purple-900 open:bg-purple-900 open:text-white open:ring-1  open:shadow-lg p-6 rounded-lg cursor-pointer">
      <summary class="text-xl leading-6 font-semibold select-none">
        {question}
      </summary>
      <div class="mt-3 text-lg leading-6 text-gray-200 dark:text-gray-100 open:bg-white">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export default Question;
