const initialState = {
  user: {
    name: undefined,
  },
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case 'USER_SAVE':
      return {
        ...state,
        user: state,
      };
    default:
      return state;
  }
};
