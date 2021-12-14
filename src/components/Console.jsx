import { useContext } from "react";
import {Link} from 'react-router-dom' 
import { AppContext } from "../AppContext";

import Welcome from "./Welcome"

import pixelComputer from "../assets/pixelComp.png";


const Console = () => {
  const { state } = useContext(AppContext)
  const { username } = state

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
            <Welcome />
          </div>
          <div className="button-section"></div>
        </div>

        <Link to='/cypher'>Start Task 2</Link>
      </div>
    </div>
  )
}

export default Console
