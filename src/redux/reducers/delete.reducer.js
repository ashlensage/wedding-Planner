const deleteReducer = (state = [], action) => {
  console.log('state', state)
  switch (action.type) {
    case "WEDDING_PLANNER_DELETE":
      return null;
    case "DELETE_FLOWER_ARRANGEMENT":
      return null;
    default:
      return state;
  }
};
// get @ global state !!!!!

// user will be on the redux state at:
// state.user
export default deleteReducer;
