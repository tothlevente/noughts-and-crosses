import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const characters = {
  firstPlayer: [
    <CircleXIcon className="first-character" />,
    <DropletIcon className="first-character" />,
    <MoonIcon className="first-character" />,
    <KeyRoundIcon className="first-character" />,
  ],
  secondPlayer: [
    <CircleDotIcon className="second-character" />,
    <FlameIcon className="second-character" />,
    <SunMediumIcon className="second-character" />,
    <KeySquareIcon className="second-character" />,
  ],
};

export default function CharacterSelector({
  firstCharacter,
  setFirstCharacter,
  secondCharacter,
  setSecondCharacter,
}: {
  firstCharacter: JSX.Element;
  setFirstCharacter: React.Dispatch<React.SetStateAction<JSX.Element>>;
  secondCharacter: JSX.Element;
  setSecondCharacter: React.Dispatch<React.SetStateAction<JSX.Element>>;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setFirstCharacter(characters.firstPlayer[0]);
    setSecondCharacter(characters.secondPlayer[0]);
    setOpen(true);
  }, []);

  const handleFirstCharacterClick = (
    character: JSX.Element,
    index: number
  ) => {
    setFirstCharacter(character);
    setSecondCharacter(characters.secondPlayer[index]);
  };

  const handleSecondCharacterClick = (character: JSX.Element) => {
    setSecondCharacter(character);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleClose}
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center">
            Select characters
          </DialogTitle>
          <DialogDescription className="flex justify-center">
            Please select the characters for each player.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-row justify-center items-center gap-2.5">
            <p className="first-character">{firstCharacter}</p>
            <p className="second-character">{secondCharacter}</p>
          </div>
        </div>
        <div className="grid justify-items-center m-7">
          <p>First player, choose:</p>
          <div className="flex items-center space-x-2 gap-1.5 mb-3">
            {characters.firstPlayer.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="first-character"
                onClick={() => handleFirstCharacterClick(item, index)}
              >
                {item}
              </Button>
            ))}
          </div>
          <p>Second player, choose:</p>
          <div className="flex items-center space-x-2 gap-1.5">
            {characters.secondPlayer.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className="second-character"
                onClick={() => handleSecondCharacterClick(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <DialogFooter className="contents sm:justify-start">
          <DialogClose asChild>
            <Button type="button">Play a new game!</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
