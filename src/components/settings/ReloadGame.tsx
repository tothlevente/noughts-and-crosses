import { UserPenIcon } from "lucide-react";
import { Button } from "../ui/button";

interface ReloadGameProps {
  setOpenSelectCharacters: React.Dispatch<React.SetStateAction<boolean>>;
  jumpTo: (nextMove: number) => void;
}

const ReloadGame = ({ setOpenSelectCharacters, jumpTo }: ReloadGameProps) => {
  const handleClose = () => {
    setOpenSelectCharacters(true);
    jumpTo(0);
  };

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleClose}
    >
      <UserPenIcon />
    </Button>
  );
};

export { ReloadGame };
