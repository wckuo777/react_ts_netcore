import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SortState {
  rawInput: string;
  allowDuplicates: boolean;
  sortedResult: number[];
}

const initialState: SortState = {
  rawInput: '',
  allowDuplicates: true,
  sortedResult: [],
};

const parseInput = (input: string, allowDuplicates: boolean): number[] => {
  let nums = input
    .split(',')
    .map((s) => s.trim())
    .filter((s) => /^-?\d+$/.test(s)) 
    .map(Number);

  if (!allowDuplicates) {
    nums = Array.from(new Set(nums));
  }

  return nums;
};

export const numSorterSlice = createSlice({
  name: 'numberSorter',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<string>) => {
      state.rawInput = action.payload;
    },
    toggleDuplicates: (state) => {
      state.allowDuplicates = !state.allowDuplicates;
    },
    sortAsc: (state) => {
      const parsed = parseInput(state.rawInput, state.allowDuplicates);
      state.sortedResult = parsed.sort((a, b) => a - b);
    },
    sortDesc: (state) => {
      const parsed = parseInput(state.rawInput, state.allowDuplicates);
      state.sortedResult = parsed.sort((a, b) => b - a);
    },
  },
});

export const { setInput, toggleDuplicates, sortAsc, sortDesc } = numSorterSlice.actions;
export default numSorterSlice.reducer;