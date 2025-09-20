import React, { useState, useEffect } from "react";

const questionsData = [
  {
    q: "What does Benedict’s solution test for?",
    choices: ["A) Starch", "B) Reducing sugars", "C) Proteins", "D) Lipids"],
    correct: "B",
  },
  {
    q: "What color indicates a positive Benedict’s test?",
    choices: ["A) Blue-black", "B) White/cloudy", "C) Green → Brick-red", "D) Purple"],
    correct: "C",
  },
  {
    q: "What does iodine solution test for?",
    choices: ["A) Chloride ions", "B) Starch", "C) Glucose", "D) Proteins"],
    correct: "B",
  },
  {
    q: "What color indicates a positive iodine test?",
    choices: ["A) Blue-black", "B) Yellow", "C) Red", "D) White precipitate"],
    correct: "A",
  },
  {
    q: "What does silver nitrate test for?",
    choices: ["A) Lipids", "B) Chloride ions", "C) Sugars", "D) Starch"],
    correct: "B",
  },
  {
    q: "What indicates a positive silver nitrate test?",
    choices: ["A) White/cloudy precipitate", "B) Blue-black color", "C) Red color", "D) Foaming"],
    correct: "A",
  },
  {
    q: "What happens to a cell in an isotonic solution?",
    choices: ["A) Crenation", "B) Hemolysis", "C) Stays the same", "D) Bursts"],
    correct: "C",
  },
  {
    q: "What happens to a cell in a hypertonic solution?",
    choices: ["A) Stays the same", "B) Hemolysis", "C) Crenation (shrinks)", "D) Bursts"],
    correct: "C",
  },
  {
    q: "What happens to a cell in a hypotonic solution?",
    choices: ["A) Stays the same", "B) Hemolysis (bursts)", "C) Shrinks", "D) Precipitates"],
    correct: "B",
  },
  {
    q: "Define diffusion.",
    choices: [
      "A) Water movement only",
      "B) Movement of molecules from high → low concentration",
      "C) Active transport",
      "D) Movement due to hydrostatic pressure",
    ],
    correct: "B",
  },
  {
    q: "Define osmosis.",
    choices: [
      "A) Movement of water across a selectively permeable membrane",
      "B) Movement of glucose",
      "C) Active transport",
      "D) Filtration of solutes",
    ],
    correct: "A",
  },
  {
    q: "Define filtration.",
    choices: [
      "A) Active pumping",
      "B) Movement of solutes due to hydrostatic pressure",
      "C) Osmosis of water",
      "D) Simple diffusion",
    ],
    correct: "B",
  },
  {
    q: "Which of the following affects diffusion?",
    choices: ["A) Temperature", "B) Concentration gradient", "C) Molecular size", "D) All of the above"],
    correct: "D",
  },
  {
    q: "What type of layer makes the plasma membrane?",
    choices: ["A) Protein layer", "B) Carbohydrate layer", "C) Phospholipid bilayer", "D) Cholesterol"],
    correct: "C",
  },
  {
    q: "Which part of the phospholipid is hydrophilic?",
    choices: ["A) Tail", "B) Head", "C) Middle", "D) Both"],
    correct: "B",
  },
  {
    q: "Which part of the phospholipid is hydrophobic?",
    choices: ["A) Tail", "B) Head", "C) Outer layer", "D) Both"],
    correct: "A",
  },
];

export function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Shuffle questions
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (choice) => {
    const correctAnswer = questions[current].correct;

    if (choice.startsWith(correctAnswer)) {
      setScore(score + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect. Correct answer: ${correctAnswer}`);
    }

    setTimeout(() => {
      setFeedback("");
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setShowScore(true);
      }
    }, 1200);
  };

  if (!questions.length) return <p>Loading quiz...</p>;

  return (
    <div className="quiz-app" style={{ fontFamily: "Arial", maxWidth: "600px", margin: "20px auto" }}>
      <h2>🧬 Anatomy & Physiology Lab Quiz 🧬</h2>
      <hr />

      {showScore ? (
        <div>
          <h3>
            Your final score: {score} / {questions.length}
          </h3>
          <p>🎉 Quiz complete!</p>
          <button onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h3>
            Q{current + 1}: {questions[current].q}
          </h3>
          <div>
            {questions[current].choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(choice)}
                style={{
                  display: "block",
                  margin: "8px 0",
                  padding: "10px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                {choice}
              </button>
            ))}
          </div>
          {feedback && <p style={{ fontWeight: "bold" }}>{feedback}</p>}
        </div>
      )}
    </div>
  );
}
