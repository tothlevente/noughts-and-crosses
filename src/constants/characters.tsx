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
    <CircleDotIcon className="second-character" />,
    <FlameIcon className="second-character" />,
    <SunMediumIcon className="second-character" />,
    <KeySquareIcon className="second-character" />,
  ],
};
