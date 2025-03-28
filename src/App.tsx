import { UseWindowDimensions } from "./components/use/UseWindowDimensions";
import { SelectCharacters } from "./components/settings/SelectCharacters";
import { useCharacters } from "./context/CharactersContext";
import { calculateWinner } from "./utils/calculateWinner";
import { ThemeProvider } from "./context/ThemeContext";
import { calculateDraw } from "./utils/calculateDraw";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { CHARACTERS } from "./constants/characters";
import { Board } from "./components/board/Board";
import { handlePlay } from "./utils/handlePlay";
import { useEffect, useState } from "react";
import { jumpTo } from "./utils/jumpTo";

import ReactConfetti from "react-confetti";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [openSelectCharacters, setOpenSelectCharacters] = useState(false);

  const { setFirstCharacter, setComputerCharacter } = useCharacters();
  const { height, width } = UseWindowDimensions();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = calculateWinner(currentSquares);
  const draw = calculateDraw(history, winner, currentMove);

  useEffect(() => {
    setFirstCharacter(CHARACTERS.firstPlayer[0]);
    setComputerCharacter(CHARACTERS.computer[0]);
  }, []);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="site-wrapper">
        {(winner || draw) && (
          <ReactConfetti
            width={width}
            height={height}
            recycle={false}
          />
        )}
        <Header
          setOpenSelectCharacters={setOpenSelectCharacters}
          jumpTo={(nextMove) => jumpTo(nextMove, setCurrentMove)}
        />
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={(nextSquares) =>
            handlePlay(nextSquares, history, currentMove, setHistory, setCurrentMove)
          }
          jumpTo={(nextMove) => jumpTo(nextMove, setCurrentMove)}
          draw={draw}
        />
        <Footer />
      </div>

      {openSelectCharacters && (
        <SelectCharacters
          open={openSelectCharacters}
          setOpen={setOpenSelectCharacters}
        />
      )}
    </ThemeProvider>
  );
}
