const getReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WEDDING_PLANNER_GET':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default getReducer;
