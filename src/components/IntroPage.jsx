import { useContext } from "react";
import { AppContext } from "../AppContext";
import pixelComputer from "../assets/pixelComp.png";
import {Link} from 'react-router-dom' 

const IntroPage = () => {
  const { state } = useContext(AppContext);
  const { username } = state;

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
          <p className="intro-span">
            Hello and welcome to the NC codebreaker challenge! Ahead of you are
            three tasks, designed to see how you aspanproach cognitive problems!
            Task 1 - Unlock the right safe! Task 2 - Use the code cheat sheet
            given to you to solve the cipher Task 3 - Navigate through our NC
            Maze! Each challenge will give you a code that you need to input to
            progress!
          </p>
        </div>
        <Link to='/cypher'>Start Challenge</Link>
      </div>
    </div>
  );
};

export default IntroPage;
