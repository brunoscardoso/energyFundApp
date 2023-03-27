import {createSlice} from '@reduxjs/toolkit';

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    route: 'home',
  } as IMenu,
  reducers: {
    setMenu: (state: IMenu, action) => {
      state.route = action.payload.route;
    },
  },
});

export const {setMenu} = menuSlice.actions;

export default menuSlice.reducer;
