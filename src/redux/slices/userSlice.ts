import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'userSave',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
  } as IUser,
  reducers: {
    setUser: (state: IUser, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
