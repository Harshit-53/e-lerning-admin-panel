import { useState } from 'react';

const quizData = [
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Laravel", "Django", "React", "Spring Boot"],
    answer: 2,
    explanation: "React is a popular JavaScript library for building user interfaces. The others are not JavaScript frameworks.",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: 2,
    explanation: "CSS stands for Cascading Style Sheets, which is used to style HTML elements on a webpage.",
  },
];

export default function Quiz() {
  const [selected, setSelected] = useState(Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionIdx, optionIdx) => {
    if (!submitted) {
      const updated = [...selected];
      updated[questionIdx] = optionIdx;
      setSelected(updated);
    }
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <div className="p-4 bg-white text-black rounded-xl h-[100%] w-[100%] overflow-auto hide-scrollbar">
      {quizData.map((q, qIdx) => (
        <div key={qIdx} className="mb-8">
          <h3 className="mb-2 font-semibold">{q.question}</h3>
          <div className="flex flex-col gap-2">
            {q.options.map((opt, idx) => {
              const isSelected = selected[qIdx] === idx;
              const isCorrect = submitted && idx === q.answer;
              const isWrong = submitted && isSelected && idx !== q.answer;

              return (
                <label
                  key={idx}
                  className={`px-4 py-2 rounded-md border cursor-pointer ${
                    isCorrect
                      ? "bg-green-200 border-green-600"
                      : isWrong
                      ? "bg-red-200 border-red-600"
                      : isSelected
                      ? "bg-blue-100 border-blue-400"
                      : "bg-gray-100 border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${qIdx}`}
                    checked={isSelected}
                    onChange={() => handleSelect(qIdx, idx)}
                    className="hidden"
                  />
                  {opt}
                </label>
              );
            })}
          </div>

          {/* Explanation section after submission */}
          {submitted && (
            <div className="mt-3 text-sm text-gray-700 bg-gray-100 border-l-4 border-blue-500 px-4 py-2 rounded">
              <strong>Explanation:</strong> {q.explanation}
            </div>
          )}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit Quiz
        </button>
      )}
    </div>
  );
}
