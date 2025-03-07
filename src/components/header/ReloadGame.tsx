import { RotateCcwIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function ReloadGame() {
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => window.location.reload()}
    >
      <RotateCcwIcon />
    </Button>
  );
}
