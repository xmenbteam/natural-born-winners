import { useReducer } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AppContext, redFunc, initialState } from "./AppContext"
import Login from "./components/Login"
import Console from "./components/Console"
import "./App.css"

function App() {
  const [state, dispatch] = useReducer(redFunc, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/games/:game" element={<Console />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
