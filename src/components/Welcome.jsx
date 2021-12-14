import { useContext } from "react"
import TypeWriterEffect from "react-typewriter-effect"
import { AppContext } from "../AppContext"

const Welcome = () => {
  const { state } = useContext(AppContext)
  const { username } = state

  return (
    <TypeWriterEffect
      textStyle={{ fontFamily: "Orbitron" }}
      startDelay={100}
      cursorColor="black"
      text={`Welcome ${username}! You are about to embark on your first task...so here we go! Before you are four keysafes....there is also a single key....your task is simple...match the key to the safe and reveal the code that is needed to progress to the next task...enter that code into the first box....`}
      typeSpeed={40}
    />
  )
}

export default Welcome
