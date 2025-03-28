import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

import { useCharacters } from "@/context/CharactersContext";
import { CHARACTERS } from "@/constants/characters";
import { useMode } from "@/context/ModeContext";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SelectCharacters = ({ open, setOpen }: Props) => {
  if (!open) return null;

  const { firstCharacter, setFirstCharacter, secondCharacter, setSecondCharacter } = useCharacters();
  const { setMode } = useMode();
  const { t } = useTranslation();

  const handleFirstCharacterClick = (character: JSX.Element, index: number) => {
    setFirstCharacter(character);
    setSecondCharacter(CHARACTERS.secondPlayer[index]);
  };

  const handleSecondCharacterClick = (character: JSX.Element) => {
    setSecondCharacter(character);
  };

  const handlePlayerVsComputerClick = () => {
    setMode("computer");
    onCancel();
  };

  const handlePlayerVsPlayerClick = () => {
    setMode("player");
    onCancel();
  };

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onCancel}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center">{t("selectCharactersTitle")}</DialogTitle>
          <DialogDescription className="flex justify-center">
            {t("selectCharactersDescription")}
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-row justify-center items-center gap-2.5">
            <p className="first-character">{firstCharacter}</p>
            <p className="second-character">{secondCharacter}</p>
          </div>
        </div>
        <div className="grid justify-items-center m-6">
          <p>{t("firstPlayerChoose")}</p>
          <div className="flex items-center space-x-2 gap-1.5 mb-3">
            {CHARACTERS.firstPlayer.map((item, index) => (
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
          <p>{t("secondPlayerChoose")}</p>
          <div className="flex items-center space-x-2 gap-1.5">
            {CHARACTERS.secondPlayer.map((item, index) => (
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
        <div className="flex flex-col justify-center gap-2">
          <Button
            variant="default"
            onClick={handlePlayerVsPlayerClick}
          >
            {t("startNewGamePlayerVsPlayer")}
          </Button>
          <Button
            variant="outline"
            onClick={handlePlayerVsComputerClick}
          >
            {t("startNewGamePlayerVsComputer")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
