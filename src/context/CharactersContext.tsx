import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { CircleDotIcon, CircleXIcon } from "lucide-react";

interface CharactersContextData {
  firstCharacter: JSX.Element;
  secondCharacter: JSX.Element;
  setFirstCharacter: Dispatch<SetStateAction<JSX.Element>>;
  setSecondCharacter: Dispatch<SetStateAction<JSX.Element>>;
}

const CharactersContext = createContext<CharactersContextData>({} as CharactersContextData);

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [firstCharacter, setFirstCharacter] = useState(<CircleXIcon />);
  const [secondCharacter, setSecondCharacter] = useState(<CircleDotIcon />);

  return (
    <CharactersContext.Provider
      value={{
        firstCharacter,
        secondCharacter,
        setFirstCharacter,
        setSecondCharacter,
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
