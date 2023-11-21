import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../store/gameSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
