import SelectCharactersDialog from "./components/settings/SelectCharactersDialog";
import UseWindowDimensions from "./components/use/UseWindowDimensions";
import CalculateWinner from "./controllers/CalculateWinner";
import CalculateDraw from "./controllers/CalculateDraw";
import SquareProps from "./interfaces/SquareProps";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ReactConfetti from "react-confetti";
import Game from "./components/game/Game";

import { ThemeProvider } from "./components/themes/ThemeProvider";
import { CircleDotIcon, CircleXIcon } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [firstCharacter, setFirstCharacter] = useState(<CircleXIcon />);
  const [secondCharacter, setSecondCharacter] = useState(<CircleDotIcon />);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [openSelectCharacters, setOpenSelectCharacters] = useState(true);

  const { height, width } = UseWindowDimensions();

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const winner = CalculateWinner(currentSquares);
  const draw = CalculateDraw(history, winner, currentMove);

  const handlePlay = (nextSquares: Array<SquareProps>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

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
          jumpTo={jumpTo}
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

      {openSelectCharacters && (
        <SelectCharactersDialog
          open={openSelectCharacters}
          setOpen={setOpenSelectCharacters}
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
          setFirstCharacter={setFirstCharacter}
          setSecondCharacter={setSecondCharacter}
        />
      )}
    </ThemeProvider>
  );
}
