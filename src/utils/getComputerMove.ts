import { NeuralNetwork } from "brain.js";

const net = new NeuralNetwork();

net.train([
  { input: [1, 0, 0, 0, 0, 0, 0, 0, 0], output: [0, 1, 0, 0, 0, 0, 0, 0, 0] },
  { input: [0, 1, 0, 0, 0, 0, 0, 0, 0], output: [0, 0, 1, 0, 0, 0, 0, 0, 0] },
  { input: [0, 0, 1, 0, 0, 0, 0, 0, 0], output: [0, 0, 0, 1, 0, 0, 0, 0, 0] },
  { input: [0, 0, 0, 1, 0, 0, 0, 0, 0], output: [0, 0, 0, 0, 1, 0, 0, 0, 0] },
  { input: [0, 0, 0, 0, 1, 0, 0, 0, 0], output: [0, 0, 0, 0, 0, 1, 0, 0, 0] },
  { input: [0, 0, 0, 0, 0, 1, 0, 0, 0], output: [0, 0, 0, 0, 0, 0, 1, 0, 0] },
  { input: [0, 0, 0, 0, 0, 0, 1, 0, 0], output: [0, 0, 0, 0, 0, 0, 0, 1, 0] },
  { input: [0, 0, 0, 0, 0, 0, 0, 1, 0], output: [0, 0, 0, 0, 0, 0, 0, 0, 1] },
  { input: [0, 0, 0, 0, 0, 0, 0, 0, 1], output: [1, 0, 0, 0, 0, 0, 0, 0, 0] },
]);

export function getComputerMove(squares: Array<string | null>): number {
  const input = squares.map((square) => {
    if (square === "X") return 1;
    if (square === "O") return -1;
    return 0;
  });

  const output = net.run(input) as number[];

  return output.indexOf(Math.max(...output));
}
