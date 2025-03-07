import { ModeToggle } from "../themes/ModeToggle";
import { GripIcon } from "lucide-react";

import ReloadGame from "./ReloadGame";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-nowrap flex-row justify-center">
        <GripIcon />
        <p className="ml-1 font-bold">Noughts and crosses</p>
      </div>
      <div className="flex flex-nowrap flex-row justify-center gap-2">
        <ReloadGame />
        <ModeToggle />
      </div>
    </div>
  );
}
