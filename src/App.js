import "./App.css";
import Login from "./components/Login";
import NCLogoRed from "./assets/NCLogoRed.png";

function App() {
  return (
    <div className="App">
      <img className="main-logo" src={NCLogoRed} alt="RED LOGO THERE PAL" />
      <Login />
    </div>
  );
}

export default App;
