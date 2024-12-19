import CircleDot from "./components/icons/circle-dot";
import SquareProps from "./interfaces/SquareProps";
import Footer from "./components/contents/Footer";
import CircleX from "./components/icons/circle-x";
import Header from "./components/contents/Header";
import Game from "./components/contents/Game";

import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { useState } from "react";

export default function App() {
  const [firstCharacter, setFirstCharacter] = useState(<CircleX />);
  const [secondCharacter, setSecondCharacter] = useState(<CircleDot />);

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

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

  const moves = history.map((_squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to move: " + move + ".";
    } else {
      description = "Go to game start";
    }

    return (
      <li
        className=""
        key={move}
      >
        <Button
          className=""
          onClick={() => jumpTo(move)}
        >
          {description}
        </Button>
      </li>
    );
  });

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        <Header />
        <Game
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
