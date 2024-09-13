import { createContext, useReducer } from "react";
import Header from "../layout/Header/Header";

export const ThemeContext = createContext(Header);

function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    mode: "dark",
  });
  function changeMode(mode) {
    dispatch({ type:"CHANGE_MODE", payload: mode });
  }
  return (
    <ThemeContext.Provider value={{ ...state,changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
