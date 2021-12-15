import { useState, useEffect, useContext } from 'react';
import { useDrag, useDrop } from "react-dnd";
import cypher from '../utils/cypher';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import party from 'party-js';
import TypeWriterEffect from 'react-typewriter-effect'
import { AppContext } from '../AppContext';
import StageButton from '../components/StageButton'

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
  const {state} = useContext(AppContext)
  const {phrases} = state
  const [currentDrag, setCurrentDrag] = useState(null);
  const [currentDragTarget, setCurrentDragTarget] = useState(null);
  const [guess, setGuess] = useState(null);
  const [success, setSuccess] = useState(false);


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
      <TypeWriterEffect
        textStyle={{ fontFamily: "Orbitron" }}
        startDelay={100}
        cursorColor="black"
        text={`Decode the the message... ${cypher(phraseToGuess)} using these clues: i = v, k = x `}
        typeSpeed={40}
      />
      <TypeWriterEffect
        textStyle={{ fontFamily: "Orbitron" }}
        startDelay={4000}
        cursorColor="black"
        text={`Drag your chosen answer to the blank square below`}
        typeSpeed={40}
      />
      <br></br>

      {success && (
        
        <div
            className='confetti-button'
            onMouseMove={(event) => {
              party.confetti(event.target, {
                count: party.variation.range(20, 40)
              });
              party.confetti(event.target, {
                count: party.variation.range(10, 50)
              });
              party.confetti(event.target, {
                count: party.variation.range(20, 40)
              });
            }}
          >
          <h3>Well done!</h3>
          </div>
          
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
