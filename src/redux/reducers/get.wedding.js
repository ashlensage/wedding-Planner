import { combineReducers } from "redux";

const getReducer = (state = {}, action) => {
  switch (action.type) {
    case "WEDDING_PLANNER_GET":
      return action.payload;
    default:
      return state;
  }
};

const getColorThemesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_COLOR_THEME":
      return action.payload;
    case "DELETE_COLOR_PALETTE":
      return {};
    default:
      return state;
  }
};

const getVenuesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_VENUES":
      return action.payload;
    case "DELETE_VENUE":
      return {};

    default:
      return state;
  }
};

const getFlowersReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_FLOWERS":
      return action.payload;
    case "DELETE_FLOWER_ARRANGEMENT":
      return {};
    default:
      return state;
  }
};

const getHairReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_HAIR":
      return action.payload;
    case "DELETE_HAIR_STYLE":
      return {};
    default:
      return state;
  }
};

const getMakeupReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MAKEUP":
      return action.payload;
    case "DELETE_MAKEUP":
      return {};
    default:
      return state;
  }
};

const getWeddingDressesReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEDDING_DRESS":
      return action.payload;
    case "DELETE_WEDDING_DRESS":
      return {};
    default:
      return state;
  }
};

const getUserResultsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_WEDDING_PLANNER_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  getReducer,
  getColorThemesReducer,
  getVenuesReducer,
  getFlowersReducer,
  getHairReducer,
  getMakeupReducer,
  getWeddingDressesReducer,
  getUserResultsReducer,
});
