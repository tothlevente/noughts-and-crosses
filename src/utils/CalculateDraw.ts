/**
 * Determines if the game is a draw.
 *
 * @param history - The history of moves in the game.
 * @param winner - The winner of the game, if any.
 * @param currentMove - The current move number.
 * @returns `true` if the game is a draw, otherwise `false`.
 */
export default function CalculateDraw(
  history: any,
  winner: number | null,
  currentMove: number
): boolean {
  return history.length === 10 && winner === null && currentMove != 0;
}
