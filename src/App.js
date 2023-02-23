import React, { useState } from 'react';
import "./App.css";

let nextId = 0;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [ingredients, addIngredients] = useState([]);

  const questions = [
    {
      question: 'What is the shape of your hair strand?',
      answers: [
        { option: 'Straight', ingredient: "feather" },
        { option: 'Wavy', ingredient: "feather" },
        { option: 'Curly', ingredient: "feather" },
        { option: 'Oily', ingredient: "feather" },
      ],
    },
    {
      question: 'How would you describe the diameter of your hair strand?',
      answers: [
        { option: 'Fine', ingredient: "feather" },
        { option: 'Medium', ingredient: "feather" },
        { option: 'Coarse', ingredient: "feather" },
      ],
    },
    {
      question: 'When you stretch a strand of your hair, how much does it stretch before breaking?',
      answers: [
        { option: 'A lot', ingredient: "feather" },
        { option: 'A little', ingredient: "feather" },
        { option: 'Not at all', ingredient: "feather" },
      ],
    },
    {
      question: 'How well does your hair absorb and retain moisture?',
      answers: [
        { option: 'Easily and quickly', ingredient: "feather" },
        { option: 'Slowly and with difficulty', ingredient: "feather" },
        { option: 'Not at all', ingredient: "feather" },
      ],
    },
    {
      question: 'How much hair do you have on your scalp?',
      answers: [
        { option: 'Thin', ingredient: "feather" },
        { option: 'Medium', ingredient: "feather" },
        { option: 'Thick', ingredient: "feather" },
      ],
    },
    {
      question: 'How often do you experience flaking, itching or soreness on your scalp?',
      answers: [
        { option: 'Never', ingredient: "feather" },
        { option: 'Sometimes', ingredient: "feather" },
        { option: 'Often', ingredient: "feather" },
      ],
    },
    {
      question: 'What type of climate or weather do you live in?',
      answers: [
        { option: 'Hot and humid', ingredient: "feather" },
        { option: 'Cold and dry', ingredient: "feather" },
        { option: 'Mild and temperate', ingredient: "feather" },
      ],
    },
    {
      question: 'How often do you style your hair with heat or chemical treatments?',
      answers: [
        { option: 'Never', ingredient: "feather" },
        { option: 'Occasionally', ingredient: "feather" },
        { option: 'Frequently', ingredient: "feather" },
      ],
    },
    {
      question: 'Are you allergic to any hair care ingredients?',
      answers: [
        { option: 'Yes', ingredient: "feather" },
        { option: 'No', ingredient: "feather" },
      ],
    },
  ];

  const handleAnswer = (ingredient) => {
    ingredients.push({
      id: nextId++,
      ingredient: ingredient,
    });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Create a way to display all the ingredients that will be used in the recipe
      // and then reset the quiz
      console.log(ingredients);
      setCurrentQuestion(0);
    }
  };

  return (
    <div className='quiz'>
      <h2>Hair Type Quiz</h2>
      <div className='centerCard'>
      <div className='question'>
        {questions[currentQuestion].question}
      </div>
      <div className='answers'>
        {questions[currentQuestion].answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer.correct)}
          >
            {answer.option}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Quiz;
