import {createSlice} from '@reduxjs/toolkit';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export const userSlice = createSlice({
  name: 'userSave',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
  } as User,
  reducers: {
    setUser: (state: User, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
