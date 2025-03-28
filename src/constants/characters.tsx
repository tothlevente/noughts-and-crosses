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
  firstPlayer: [
    <CircleXIcon className="first-character" />,
    <DropletIcon className="first-character" />,
    <MoonIcon className="first-character" />,
    <KeyRoundIcon className="first-character" />,
  ],
  computer: [
    <CircleDotIcon className="computer-character" />,
    <FlameIcon className="computer-character" />,
    <SunMediumIcon className="computer-character" />,
    <KeySquareIcon className="computer-character" />,
  ],
};
