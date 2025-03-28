# Noughts and crosses :video_game:

Noughts and crosses (tic-tac-toe) is a classic two-player game played on a 3x3 grid. Players take turns placing marks (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> or <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-icon lucide-circle-dot"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>) on the board, and the player who first manages to get three identical marks in a row, column or diagonal wins. If the board is full and there is no winner, the game is a draw.

> [!NOTE]
> This branch introduces computer-generated move creation using Brain.js. It's a standalone development branch, deviating from the standard feature branch workflow. For our typical development practices, please refer to the feature branches.

## Available scripts:

In the project directory, you can run:

- `npm run start`
- `npm run lint`
- `npm run preview`
- `npm run build`

## Game rules:

- Players: The game is played by player and compuetr who take turns marking the game board. One player uses <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>, the compuetr <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-icon lucide-circle-dot"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>.
- The game board: The game board is a 3x3 grid consisting of nine squares.
- The goal of the game: The goal of the game is to place three identical marks (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg> or <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-icon lucide-circle-dot"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>) in a row, column or diagonal.

## How to play:

1. Players take turns placing marks on an empty square.
2. The first player usually uses <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>.
3. Players continue taking turns until someone wins or the board is full.
4. Winning: The player who first manages to get three identical marks in a row, column or diagonal wins.
5. Draw: If the board is full and neither player has won, the game is a draw.

## Used external sources:

- [Brain.js](https://github.com/BrainJS/brain.js)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev)
- [Google Fonts](https://fonts.google.com/)
- [React confetti](https://www.npmjs.com/package/react-confetti)
- [Josefin Sans Font](https://github.com/googlefonts/josefinsans)
- [React (Tutorial: Tic-Tac-Toe)](https://react.dev/learn/tutorial-tic-tac-toe)

## License:

- This project is licensed under [MIT](https://github.com/tothlevente/noughts-and-crosses/blob/main/LICENSE).
- The used font is licensed under the [SIL Open Font License, Version 1.1.](https://fonts.google.com/specimen/Josefin+Sans/license)

For more information please visit the license files.
