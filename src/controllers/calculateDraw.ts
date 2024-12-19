export default function calculateDraw(
  history: any,
  winner: number | null,
  currentMove: number
): boolean {
  return history.length === 10 && winner === null && currentMove != 0;
}
