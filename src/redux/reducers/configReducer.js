const inititalState = {
  menuCollapsed: true,
};

const barReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'MENU_COLLAPSED': {
      return {...state, menuCollapsed: action.payload};
    }
  }
  return state;
};
export default barReducer;
