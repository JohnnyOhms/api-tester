import { DARK_MODE } from "../action/actionTYpe";
import { Action } from "../utils/types";

const initialState = {
  mode: "light",
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default mainReducer;
