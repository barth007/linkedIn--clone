import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};




export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    login: (state, action) => {
     
      state.user =action.payload; //the payload is basically an object we pass alone with the action
    },
  
    logout: (state) => {
      state.user += null;
    },
  },


});

export const { login, logout } = userSlice.actions;


export const selectUser = (state) => state.user.user; //the pulling in is done in here, it is call the selectors 


export default userSlice.reducer;
