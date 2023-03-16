const deleteReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEDDING_PLANNER_DELETE':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default deleteReducer;
