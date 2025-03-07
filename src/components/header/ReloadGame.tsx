import { RotateCcwIcon } from "lucide-react";
import { Button } from "../ui/button";

const ReloadWindow = () => {
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={() => window.location.reload()}
    >
      <RotateCcwIcon />
    </Button>
  );
};

export { ReloadWindow };
