import UseWindowDimensions from "./components/UseWindowDimensions";
import CharacterSelector from "./components/CharacterSelector";
import CalculateWinner from "./controllers/CalculateWinner";
import CalculateDraw from "./controllers/CalculateDraw";
import CircleDot from "./components/icons/circle-dot";
import SquareProps from "./interfaces/SquareProps";
import CircleX from "./components/icons/circle-x";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Game from "./components/layouts/Game";
import ReactConfetti from "react-confetti";

import { ThemeProvider } from "./components/ThemeProvider";
import { useState } from "react";

export default function App() {
  const [firstCharacter, setFirstCharacter] = useState(<CircleX />);
  const [secondCharacter, setSecondCharacter] = useState(<CircleDot />);

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const { height, width } = UseWindowDimensions();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = CalculateWinner(currentSquares);
  const draw = CalculateDraw(history, winner, currentMove);

  function handlePlay(nextSquares: Array<SquareProps>) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        {winner || draw ? (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
          />
        ) : null}
        <Header />
        <CharacterSelector
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
          setFirstCharacter={setFirstCharacter}
          setSecondCharacter={setSecondCharacter}
        />
        <Game
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          jumpTo={jumpTo}
          draw={draw}
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
