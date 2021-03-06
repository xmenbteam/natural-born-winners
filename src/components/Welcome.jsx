import { useContext } from "react"
import TypeWriterEffect from "react-typewriter-effect"
import { AppContext } from "../AppContext"

const Welcome = () => {
  const { state } = useContext(AppContext)
  const { username } = state

  return (
    <>
      <TypeWriterEffect
        textStyle={{ fontFamily: "Orbitron" }}
        startDelay={100}
        cursorColor="black"
        text={`Welcome ${username}! You are about to embark on your first task... So here we go!`}
        typeSpeed={40}
      />
      <TypeWriterEffect
        textStyle={{ fontFamily: "Orbitron" }}
        startDelay={4000}
        cursorColor="black"
        text={`Before you there are four keysafes and a single key. Your task is simple: Match the key to the safe and reveal the code that is needed to progress to the next task... Good Luck!`}
        typeSpeed={40}
      />
    </>
  )
}

export default Welcome
