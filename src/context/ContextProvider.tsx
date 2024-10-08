import { ReactNode, createContext, useContext, useReducer } from "react";

// تعریف تایپ برای یک سوال
interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// تعریف تایپ برای وضعیت مقدماتی
interface InitialStateType {
  arrayQuestions: Question[];
  page: number;
  index: number;
  score: number;
}

// تعریف تایپ برای اکشن‌های ریدیوسر
type ActionType =
  | { type: "SET_QUESTION"; payload: Question[] }
  | { type: "CHANGE_PAGE"; payload: number }
  | { type: "START_AGAIN"; payload: number }
  | { type: "ADD_SCORE"; payload: number }
  | { type: "QUESTION_INDEX" };

// تعریف تایپ برای تابع ریدیوسر
type ReducerType = (
  state: InitialStateType,
  action: ActionType
) => InitialStateType;

// تعریف محتوای اولیه
const initialState: InitialStateType = {
  arrayQuestions: [],
  page: 0,
  index: 0,
  score: 0,
};

// تابع ریدیوسر
function reducerQuestions(
  state: InitialStateType,
  action: ActionType
): InitialStateType {
  switch (action.type) {
    case "SET_QUESTION":
      return { ...state, arrayQuestions: action.payload };
    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    case "QUESTION_INDEX":
      return { ...state, index: state.index + 1 };
    case "ADD_SCORE":
      return { ...state, score: state.score + 1 };
    case "START_AGAIN":
      return {
        ...state,
        page: action.payload,
        index: 0,
        score: 0,
      };
    default:
      return state;
  }
}

// ایجاد کانتکست
const contextQuestions = createContext<{
  questionsState: InitialStateType;
  questionsDispatch: React.Dispatch<ActionType>;
}>({ questionsState: initialState, questionsDispatch: () => null });

// هوک مورد استفاده برای دریافت مقادیر کانتکست
export const useContextQuestions = () => useContext(contextQuestions);

// تعریف کامپوننت پیوسته
interface ContextProviderProps {
  children: ReactNode;
}

function ContextProvider({ children }: ContextProviderProps) {
  const [questionsState, questionsDispatch] = useReducer<ReducerType>(
    reducerQuestions,
    initialState
  );

  return (
    <contextQuestions.Provider value={{ questionsState, questionsDispatch }}>
      {children}
    </contextQuestions.Provider>
  );
}

export default ContextProvider;
