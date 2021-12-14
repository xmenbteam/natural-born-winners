import { useContext } from "react"
import { AppContext } from "../AppContext"
import pixelComputer from "../assets/pixelComp.png"

import Welcome from "./Welcome"

const IntroPage = () => {
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
      </div>
    </div>
  )
}

export default IntroPage
