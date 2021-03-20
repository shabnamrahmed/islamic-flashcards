import React, { useState, useEffect, useRef } from 'react';

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  // const [height, setHeight] = useState('initial');

  const frontEl = useRef();
  const backEl = useRef();

  // function setMaxHeight() {
  //   const frontHeight = frontEl.getBoundingClientRect;
  //   const backtHeight = backEl.getBoundingClientReact;
  //   setHeight(Math.max(frontHeight, backtHeight, 100));
  // }

  // useEffect(setMaxHeight, [
  //   flashcard.question,
  //   flashcard.answer,
  //   flashcard.option,
  // ]);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="options">
          {flashcard.options.map((option) => {
            return <div className="option">{option}</div>;
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
