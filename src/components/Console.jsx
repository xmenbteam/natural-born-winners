import { useContext } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import { AppContext } from "../AppContext"

import Cypher from "./Cypher"
import Welcome from "./Welcome"
import StageButton from "./StageButton"

import pixelComputer from "../assets/pixelComp.png"

const Console = (props) => {
  const { state } = useContext(AppContext)
  const { username } = state
  const { game } = useParams()

  console.log(game)
  return (
    <div className="content-wrapper">
      <div className="inner-wrapper">
        <h1 className="intro-page-title">HELLO {username}</h1>
        <div className="pixel-computer-banner">
          <img src={pixelComputer} alt="Pixellated computer" />
          <img src={pixelComputer} alt="Pixellated computer" />
          <img src={pixelComputer} alt="Pixellated computer" />
          <img src={pixelComputer} alt="Pixellated computer" />
        </div>
        <div className="instructions-content">
          <div className="type-section">
            {game === "intro" && <Welcome />}
            {game === "cypher" && <Cypher phraseToGuess="HOWDY!" />}
            {game === "maze" && <Welcome />}
          </div>

          <div className="button-section">
            <StageButton taskNum="1" />
            <StageButton taskNum="2" />
            <StageButton taskNum="3" />
            <button type="submit" className="test-button">
              Test
            </button>
          </div>
        </div>

        {/* <Link to='/cypher'>Start Task 2</Link> */}
      </div>
    </div>
  )
}

export default Console
