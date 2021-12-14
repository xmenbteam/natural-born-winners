import { useState, useEffect } from 'react';
import { useDrag, useDrop } from "react-dnd";
import cypher from '../utils/cypher';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function Card({ text, index, setCurrentDrag }) {
  const [{ isDragging }, dragRef] = useDrag(() => {
    return {
      type: "card",
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }
  });

  if (isDragging) {
    setCurrentDrag(index);
  }

  return (
    <div
      className="card"
      ref={dragRef}
      style={{
        backgroundColor: isDragging ? "#fbb" : "rgba(0, 0, 0, 0.12)",
      }}
      onClick={() => setCurrentDrag(index)}
    >
      {text}
    </div>
  );
}

function Box({ card, moveCard, phrase, setCurrentDrag  }) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => moveCard(),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      className="box"
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#eb1c24" : "rgba(0, 0, 0, 0.24)" }}
    >
      {card ? <Card text={phrase} index={card} setCurrentDrag={setCurrentDrag} /> : ""}
    </div>
  );
}

function Cypher({ phraseToGuess }) {
  const [currentDrag, setCurrentDrag] = useState(null);
  const [currentDragTarget, setCurrentDragTarget] = useState(null);
  const [guess, setGuess] = useState(null);
  const [success, setSuccess] = useState(false);

  const phrases = [
    "HOWDY!",
    "PUPPY!",
    "BEANS!"
  ];

  useEffect(() => {
    const guess = phrases[currentDrag - 1];
    setGuess(guess);
    if (guess === phraseToGuess) setSuccess(true);
  }, [currentDrag, phraseToGuess, phrases]);

  function moveCard(i) {
    setCurrentDragTarget(i);
  }

  return (
    <div>
    <DndProvider backend={HTML5Backend}>
      <h1>Decode the this message... {cypher(phraseToGuess)}</h1>
      <h2>Drag your chosen answer to the blank square below</h2>
      <br></br>
      <br></br>

      {success && (
        <h3>Well done!</h3>
      )}

      <section className="target">
        <Box
          card={currentDragTarget === 0}
          moveCard={moveCard.bind(null, 0)}
          setCurrentDrag={setCurrentDrag}
          phrase={guess}
          setSuccess={setSuccess}
        />
      </section>

      <section className="boxes">
        {phrases.map((phrase, index) => (
          <Box
            key={phrase}
            card={index + 1}
            moveCard={moveCard.bind(null, index + 1)}
            phrase={phrase}
            setCurrentDrag={setCurrentDrag}
          />
        ))}
      </section>
      </DndProvider>
    </div>

  );
}

export default Cypher;
