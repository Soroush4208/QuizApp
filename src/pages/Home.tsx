import { useState } from "react";
import StartPage from "./StartPage";
import SetupPage from "./SetupPage";
import QuizPage from "./QuizPage";

function Home() {
  const [page, setPage] = useState("welcome");
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  return (
    <div>
      {page === "welcome" && <StartPage setPage={setPage} />}
      {page === "setup" && <SetupPage setPage={setPage} setQuestions={setQuestions}/>}
      {page === "startQuiz" && <QuizPage questions={questions} setPage={setPage}/>}
      {/* {page === "end" && <SetupPage setPage={setPage}/>} */}
    </div>
  );
}

export default Home;
