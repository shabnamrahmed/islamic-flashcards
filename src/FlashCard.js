import React, { useState, useEffect, useRef } from 'react';
const abcd = 'abcd';

export default function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);
  // const [height, setHeight] = useState('initial');

  const frontEl = useRef();
  const backEl = useRef();

  // function setMaxHeight() {
  //   const frontHeight = frontEl.current.getBoundingClientRect;
  //   const backHeight = backEl.current.getBoundingClientReact;
  //   setHeight(Math.max(frontHeight, backHeight, 100));
  // }

  // useEffect(setMaxHeight, [
  //   flashcard.question,
  //   flashcard.answer,
  //   flashcard.option,
  // ]);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      // style={{ height: height }}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        <div className="question">{flashcard.question}</div>
        <div className="options">
          {flashcard.options.map((option, index) => {
            return (
              <div className="option">
                {abcd[index]}. {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
