import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: 0;
}
const initialState: CounterState = {
  value: 0,
};
const CountSlice = createSlice({
  name: "",
  initialState,
  reducers: {
    add: (state: CounterState, action: PayloadAction<number>) => {
      state.value++;
      return state;
    },
    sub: (state: CounterState, action: PayloadAction<number>) => {
      state.value--;
      return state;
    },
    addByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
      return state;
    },
    subByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value++;
      return state;
    },
  },
});

export default CountSlice.reducer;
