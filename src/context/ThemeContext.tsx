import { createContext, ReactNode, useReducer } from "react";

// تعریف اینترفیس برای State
interface ThemeState {
  mode: string;
}

// تعریف اینترفیس برای Action
interface ThemeAction {
  type: "CHANGE_MODE";
  payload: string;
}

// تعریف تایپ کانتکست
interface ThemeContextType extends ThemeState {
  changeMode: (mode: string) => void;
}

// ایجاد ThemeContext با تایپ مشخص
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// تعریف reducer با تایپ مشخص برای state و action
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

// تعریف تایپ برای props در ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [state, dispatch] = useReducer<React.Reducer<ThemeState, ThemeAction>>(
    themeReducer,
    {
      mode: "dark",
    }
  );

  // تعریف changeMode با تایپ مشخص
  function changeMode(mode: string) {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
