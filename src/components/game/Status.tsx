import { useTranslation } from "react-i18next";

interface Props {
  firstCharacter: JSX.Element;
  secondCharacter: JSX.Element;
  winner: number | null;
  draw: boolean;
  status: number | JSX.Element;
}

export default function Status({
  firstCharacter,
  secondCharacter,
  winner,
  draw,
  status,
}: Props) {
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
