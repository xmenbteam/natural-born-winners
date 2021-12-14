import { createContext } from "react";

export const redFunc = (state, action) => {
  switch (action.type) {
    case "submit": {
      return {...state, username: action.value.username, company: action.value.company, email: action.value.email};
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
  passcode1: null,
  passcode2: null,
  passcode3: null,
  currentStage: 0
};

export const AppContext = createContext();
