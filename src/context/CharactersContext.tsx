import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { CircleDotIcon, CircleXIcon } from "lucide-react";

interface CharactersContextData {
  firstCharacter: JSX.Element;
  computerCharacter: JSX.Element;
  setFirstCharacter: Dispatch<SetStateAction<JSX.Element>>;
  setComputerCharacter: Dispatch<SetStateAction<JSX.Element>>;
}

const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firstCharacter, setFirstCharacter] = useState(<CircleXIcon />);
  const [computerCharacter, setComputerCharacter] = useState(<CircleDotIcon />);

  return (
    <CharactersContext.Provider
      value={{
        firstCharacter,
        computerCharacter,
        setFirstCharacter,
        setComputerCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }

  return context;
};
