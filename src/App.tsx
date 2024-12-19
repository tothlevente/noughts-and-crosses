import useWindowDimensions from "./components/useWindowDimensions";
import calculateWinner from "./controllers/calculateWinner";
import CircleDot from "./components/icons/circle-dot";
import SquareProps from "./interfaces/SquareProps";
import Footer from "./components/contents/Footer";
import CircleX from "./components/icons/circle-x";
import Header from "./components/contents/Header";
import Game from "./components/contents/Game";
import ReactConfetti from "react-confetti";

import { ThemeProvider } from "./components/theme-provider";
import { useState } from "react";

export default function App() {
  const [firstCharacter, setFirstCharacter] = useState(<CircleX />);
  const [secondCharacter, setSecondCharacter] = useState(<CircleDot />);

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const { height, width } = useWindowDimensions();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);

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
        {winner ? (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
          />
        ) : null}
        <Header />
        <Game
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          jumpTo={jumpTo}
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
