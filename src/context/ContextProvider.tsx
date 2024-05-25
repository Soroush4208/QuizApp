import { ReactNode, createContext, useContext, useReducer } from "react";

const initialState = { arrayQuestions: [], page: 0, index: 0 };

export function reducerQuestions(state: any, action: any) {
  switch (action.type) {
    case "QUESTION":
      return { ...state, arrayQuestions: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    case "QUESTION_INDEX":
      return { ...state, index: state.index + 1 };
    default:
      return state;
  }
}

const contextQuestions = createContext({});

export const useContextQuestions = () => useContext(contextQuestions);

type ContextProviderProps = {
  children: ReactNode;
};

function ContextProvider({ children }: ContextProviderProps) {

    const [questionsState ,questionsDispatch]=useReducer(reducerQuestions,initialState)

  return (
    <contextQuestions.Provider value={{questionsState,questionsDispatch}}>
      {children}
    </contextQuestions.Provider>
  );
}

export default ContextProvider;
