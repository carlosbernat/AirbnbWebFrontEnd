import { createSlice } from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
// })

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    id:'',
    name:'',
    token:''
  },
  reducers:{
    signIn: (state, { payload }) => {
      const { id, name, token } = payload;
      state.id = id;
      state.name = name;
      state.token = token;
    },
    signOut: (state) => {
      state.id = '';
      state.name = '';
      state.token = '';
    }
  }
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;