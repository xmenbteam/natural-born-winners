import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { AppContext, redFunc, initialState } from "./AppContext";
import Login from "./components/Login";
import Console from "./components/Console";
import Cypher from './components/Cypher';
import Game from "./components/Game";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(redFunc, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/intro" element={<Console />} />
            <Route path='/cypher' element={ <Cypher phraseToGuess="HOWDY!" />}/>
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
