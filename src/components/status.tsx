export default function Status({
  winner,
  status,
}: {
  winner: number | null;
  status: number | JSX.Element;
}) {
  return (
    <div className="status">
      {winner ? "Winner is:" : "Next player is:"} {status}
    </div>
  );
}
