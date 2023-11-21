import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    gameFinish: false,
    score: 0,
    statusRound: "",
    currentElement: "",
    computerChoice: "",
    enterComputerChoice: false,
  },
  reducers: {
    gameFinish: (state) => {
      state.gameFinish = true;
    },
    // установка общего счета игры в Header
    setStore: (state, action) => {
      if (action.payload === "YOU WIN") {
        state.statusRound = "win";
        state.score += 1;
      } else if (action.payload === "YOU LOSE") {
        state.statusRound = "lose";
        state.score -= 1;
      }
    },
    // выбор элемента игрока (1 из 5) на стартовой странице для игры в текущем раунде
    yourChoice: (state, action) => {
      state.currentElement = action.payload;
    },
    // выбор элемента (1 из 5) компьютера на второй странице для игры в текущем раунде
    computerChoice: (state, action) => {
      state.computerChoice = action.payload;
    },
    // игрок нажал кнопку 'click' на второй странице, с выбором компьютера
    computerChoiceHandler: (state) => {
      state.enterComputerChoice = true;
    },
    // обнуление всех стейтов (кроме общего счета игры) после завершения раунда
    newGame: (state) => {
      state.gameFinish = false;
      state.currentElement = "";
      state.computerChoice = "";
      state.enterComputerChoice = false;
      state.statusRound = "";
    },
  },
});

export const {
  gameFinish,
  setStore,
  yourChoice,
  computerChoiceHandler,
  computerChoice,
  newGame,
} = gameSlice.actions;
export const selectGameFinish = (state) => state.game.gameFinish;
export const selectScore = (state) => state.game.score;
export const selectStatusRound = (state) => state.game.statusRound;
export const selectCurrentElement = (state) => state.game.currentElement;
export const selectComputerChoice = (state) => state.game.computerChoice;
export const selectEnterComputerChoice = (state) =>
  state.game.enterComputerChoice;
export default gameSlice.reducer;
