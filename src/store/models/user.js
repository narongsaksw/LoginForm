import {createSlice} from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    isUserAuthorization: false,
    citizenId: '',
    phoneNumber: '',
  },
  reducers: {
    setIsUserAuthorization: (state, action) => {
      state.isUserAuthorization = action.payload;
    },
    setUser: (state, action) => {
      state.citizenId = action.payload.citizenId;
      state.phoneNumber = action.payload.phoneNumber;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setIsUserAuthorization, setUser} = user.actions;

export default user.reducer;
