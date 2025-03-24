import { useCharacters } from "@/context/CharactersContext";
import { useTranslation } from "react-i18next";

interface Props {
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}

export default function Status({ winner, draw, status }: Props) {
  const { firstCharacter, secondCharacter } = useCharacters();
  const { t } = useTranslation();

  if (draw) {
    return (
      <div className="status">
        <b>{t("istDraw")}</b>
        <div className="draw-status">
          {firstCharacter}
          {secondCharacter}
        </div>
      </div>
    );
  } else {
    return (
      <div className="status">
        {winner ? <b>{t("winnerIs")}</b> : <p>{t("nextPlayerIs")}</p>}
        {status}
      </div>
    );
  }
}
