import "./App.css";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import IntroPage from "./components/IntroPage";
import { AppContext, redFunc, initialState } from "./AppContext";

function App() {
  const [state, dispatch] = useReducer(redFunc, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/intro" element={<IntroPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
