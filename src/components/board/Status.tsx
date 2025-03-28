import { useCharacters } from "@/context/CharactersContext";
import { useTranslation } from "react-i18next";

interface StatusProps {
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}

export const Status = ({ winner, draw, status }: StatusProps) => {
  const { playerCharacter, computerCharacter } = useCharacters();
  const { t } = useTranslation();

  if (draw) {
    return (
      <div className="status">
        <b>{t("istDraw")}</b>
        <div className="draw-status">
          {playerCharacter}
          {computerCharacter}
        </div>
      </div>
    );
  } else {
    return (
      <div className="status">
        {winner ? <b>{t("winnerIs")}</b> : <p>{t("nextCharacterIs")}</p>}
        {status}
      </div>
    );
  }
};
