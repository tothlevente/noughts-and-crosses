import { LanguagesToggle } from "../settings/LanguagesToggle";
import { ModeToggle } from "../themes/ModeToggle";
import { ReloadWindow } from "./ReloadGame";
import { GripIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-nowrap flex-row justify-center">
        <GripIcon />
        <p className="ml-1 font-bold">Noughts and crosses</p>
      </div>
      <div className="flex flex-nowrap flex-row justify-center gap-2">
        <ReloadWindow />
        <LanguagesToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
