import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GameState {
  steps: number;
  blocks: { index: number; direction: string | null }[];
}

const initialState: GameState = {
  steps: 0,
  // make an array of 18 elements, each element is an object with index and direction properties with
  // index from 0 to 17 and direction set to null
  blocks: Array.from({ length: 18 }, (_, index) => ({
    index: index,
    direction: null,
  })),
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBlocks: (
      state,
      action: PayloadAction<{
        index: number;
        direction: string;
      }>,
    ) => {
      const { index, direction } = action.payload;
      console.log(index, direction);
      state.blocks[index].direction = direction;
    },
  },
});

export const { setBlocks } = gameSlice.actions;

export const getAllBlocks = (state: RootState) => state.game.blocks;

export default gameSlice;
