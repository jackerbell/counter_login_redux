import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  initialState:initialCounterState ,
  reducers:{
    increment(state){
      state.counter++;   // immer 라는 패키지 덕분에 자동으로 원래 상태를 복제함.. 
    },
    increase(state,action){
      state.counter = state.counter + action.payload;
    },
    decrement(state){
      state.counter--;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;