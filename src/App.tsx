import Layout from "./layout/Layout";
import { useContextQuestions } from "./context/ContextProvider";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading/Loading";

const StartQuiz = lazy(() => import("./components/Home/StartQuiz"));
const SetupPage = lazy(() => import("./pages/SetupPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const EndPage = lazy(() => import("./pages/EndPage"));

function App() {
  const { questionsState } = useContextQuestions();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        {questionsState.page === 0 ? (
          <StartQuiz />
        ) : questionsState.page === 1 ? (
          <SetupPage />
        ) : questionsState.page === 2 ? (
          <QuizPage />
        ) : questionsState.page === 3 ? (
          <EndPage />
        ) : (
          ""
        )}
      </Suspense>
    </Layout>
  );
}

export default App;
