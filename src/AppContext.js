import { createContext } from "react";

export const redFunc = (state, action) => {
  switch (action.type) {
    case "submit": {
      return action.value;
    }
    default: {
      return state;
    }
  }
};

export const initialState = {
  username: "",
  company: "",
  email: "",
  startTime: null,
};

export const AppContext = createContext();
