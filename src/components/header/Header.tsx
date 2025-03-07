import { LanguagesToggle } from "../settings/LanguagesToggle";
import { ReloadGame } from "../settings/ReloadGame";
import { ModeToggle } from "../themes/ModeToggle";
import { GripIcon } from "lucide-react";

interface Props {
  setOpenSelectCharacters: React.Dispatch<React.SetStateAction<boolean>>;
  jumpTo: (nextMove: number) => void;
}

export default function Header({ setOpenSelectCharacters, jumpTo }: Props) {
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-nowrap flex-row justify-center">
        <GripIcon />
        <p className="ml-1 font-bold">Noughts and crosses</p>
      </div>
      <div className="flex flex-nowrap flex-row justify-center gap-2">
        <ReloadGame
          setOpenSelectCharacters={setOpenSelectCharacters}
          jumpTo={jumpTo}
        />
        <LanguagesToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
