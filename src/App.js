import "./App.css"
import Login from "./components/Login"
import NCLogoRed from "./assets/NCLogoRed.png"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img className="main-logo" src={NCLogoRed} alt="RED LOGO THERE PAL" />
        <Login />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/intro" element={<IntroPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
