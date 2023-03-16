const postReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEDDING_PLANNER_POST':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default postReducer;
