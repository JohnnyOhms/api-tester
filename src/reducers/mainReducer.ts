import { DARK_MODE } from "../action/actionTYpe";
import { Action } from "../utils/types";

const initialState = {
  mode: "dark",
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        mode: state.mode === "light" ? action.mode : "light",
      };
    default:
      return state;
  }
};

export default mainReducer;
