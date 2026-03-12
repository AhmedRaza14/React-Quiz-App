import { useState } from 'react'
import Quiz from './Quiz.jsx'
import './App.css'

function App() {

  const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "In which planet do we live?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Earth"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
      answer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O"
    },
    {
      question: "What is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale"
    }
  ];
  return (
    <>
      
<Quiz quizData={quizData} />
{/* <Quiz quizData={quizData} /> */}
    </>
  )
}

export default App
