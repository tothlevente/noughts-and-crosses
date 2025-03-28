import { createContext, useContext, useState } from "react";

interface ModeContextData {
  mode: "computer" | "player";
  setMode: React.Dispatch<React.SetStateAction<"computer" | "player">>;
}

const ModeContext = createContext<ModeContextData>({} as ModeContextData);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<"computer" | "player">("computer");

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
};

export const useMode = () => {
  const context = useContext(ModeContext);

  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }

  return context;
};
