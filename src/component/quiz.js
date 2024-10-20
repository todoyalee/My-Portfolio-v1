import React, { useState } from 'react';
import './Quiz.css'; // Import your CSS file for styling

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');

  const questions = [
    {
      question: "Quels systèmes d'énergie renouvelable peuvent être utilisés pour améliorer l'efficacité énergétique de ce bâtiment ?",
      options: [
        "Panneaux solaires",
        "Éoliennes",
        "Isolation thermique avancée",
        "Toutes les réponses"
      ],
      correctAnswer: "Toutes les réponses",
      feedback: "En combinant plusieurs technologies, ce bâtiment pourrait réduire considérablement sa consommation d'énergie."
    },
    {
      question: "Quel matériau de construction est le plus écologique pour renforcer la durabilité de ce bâtiment ?",
      options: [
        "Béton conventionnel",
        "Bois certifié FSC",
        "Acier recyclé",
        "Plastique renforcé"
      ],
      correctAnswer: "Bois certifié FSC",
      feedback: "Le bois certifié et l'acier recyclé réduisent l'empreinte carbone de la construction tout en garantissant une solidité durable."
    },
    {
      question: "Quelle technologie peut être mise en place dans ce bâtiment pour économiser de l'eau ?",
      options: [
        "Récupération des eaux de pluie",
        "Systèmes de réutilisation des eaux grises",
        "Toilettes à faible débit",
        "Toutes les réponses"
      ],
      correctAnswer: "Toutes les réponses",
      feedback: "Ces technologies contribuent à une gestion durable de l'eau."
    }
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setFeedback("Bonne réponse ! " + questions[questionIndex].feedback);
    } else {
      setFeedback("Mauvaise réponse. " + questions[questionIndex].feedback);
    }
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setFeedback('');
    } else {
      setFeedback('Quiz terminé ! Merci d\'avoir participé.');
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz Interactif : Industrie, Innovation et Infrastructure</h2>
      <h3>{questions[questionIndex].question}</h3>
      <ul>
        {questions[questionIndex].options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswer(option)}>{option}</button>
          </li>
        ))}
      </ul>
      {feedback && (
        <div className="feedback">
          <p>{feedback}</p>
          <button onClick={nextQuestion}>Suivant</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
