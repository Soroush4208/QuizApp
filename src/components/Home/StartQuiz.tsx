import { useContextQuestions } from "../../context/ContextProvider";

function StartQuiz() {
  const { questionsDispatch } = useContextQuestions();

  return (
    <div className="flex flex-col items-center justify-between h-full font-Quiz">
      <h1 className="font-bold text-3xl animate-pulse">Quiz</h1>
      <p className="font-bold text-2xl text-center animatedElement">welcome to Quiz App</p>
      <div className="flex flex-col justify-center items-center font-bold text-2xl transition-all">
        <p className="animate-pulse">Get start</p>
        <button
          onClick={() => {
            return questionsDispatch({ type: "PAGE", payload: 1 });
          }}
          className="cursor-pointer hover:-rotate-45 start-quiz"
        >
          🚀
        </button>
      </div>
    </div>
  );
}

export default StartQuiz;
