import {
  CircleDotIcon,
  CircleXIcon,
  DropletIcon,
  FlameIcon,
  KeyRoundIcon,
  KeySquareIcon,
  MoonIcon,
  SunMediumIcon,
} from "lucide-react";

export const CHARACTERS = {
  player: [
    <CircleXIcon className="player-character" />,
    <DropletIcon className="player-character" />,
    <MoonIcon className="player-character" />,
    <KeyRoundIcon className="player-character" />,
  ],
  computer: [
    <CircleDotIcon className="computer-character" />,
    <FlameIcon className="computer-character" />,
    <SunMediumIcon className="computer-character" />,
    <KeySquareIcon className="computer-character" />,
  ],
};
