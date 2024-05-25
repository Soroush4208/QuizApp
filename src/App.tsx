import StartQuiz from "./components/Home/StartQuiz";
import { useContextQuestions } from "./context/ContextProvider";
import Layout from "./layout/Layout";
import EndPage from "./pages/EndPage";
import QuizPage from "./pages/QuizPage";
import SetupPage from "./pages/SetupPage";

function App() {
  const { questionsState } = useContextQuestions();

  return (
    <Layout>
      {questionsState.page === 0 ? (
        <StartQuiz />
      ) : questionsState.page === 1 ? (
        <SetupPage />
      ) : questionsState.page === 2 ? (
        <QuizPage />
      ) : questionsState.page === 3 ? (
        <EndPage/>
      ) : (
        ""
      )}
    </Layout>
  );
}

export default App;
