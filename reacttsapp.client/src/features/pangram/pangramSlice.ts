import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PangramState {
  text: string;
  result: string | null;
}

const initialState: PangramState = {
  text: '',
  result: null,
};

export const pangramSlice = createSlice({
  name: 'pangram',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    checkPangram: (state) => {
      const lower = state.text.toLowerCase();
      const letters = new Set<string>();
      for (const char of lower) {
        if (char >= 'a' && char <= 'z') {
          letters.add(char);
        }
      }
      state.result =
        letters.size === 26
          ? '你的字包含26字母 (pangram)'
          : '這不是 pangram';
    },
  },
});

export const { setText, checkPangram } = pangramSlice.actions;
export default pangramSlice.reducer;
