import React, { useState } from 'react';
import FlashCardList from './FlashCardList';
import './app.css';
import * as questions from './Questions.js';

const questionCards = questions.FLASHCARDS;

function App() {
  const [flashcards, setFlashcards] = useState(questionCards);

  //useEffect(() => {}, []);
  return (
    <>
      <h1 className="header">Click on a flashcard to see the answer</h1>
      <div className="container">
        <FlashCardList flashcards={flashcards} />
      </div>
    </>
  );
}

export default App;
