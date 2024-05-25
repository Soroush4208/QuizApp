import { useContextQuestions } from "../../context/ContextProvider";

function StartQuiz() {
  const { questionsDispatch } = useContextQuestions();

  return (
    <div className="flex flex-col items-center justify-between h-full font-Quiz">
      <h1 className="font-bold text-3xl">Quiz</h1>
      <p className="font-bold text-2xl text-center">welcome to Quiz App</p>
      <div className="flex flex-col justify-center items-center font-bold text-2xl hover:scale-125 transition-all">
        <p>Get start</p>

        <button
          onClick={() => {
            return questionsDispatch({ type: "PAGE", payload: 1 });
          }}
          className="cursor-pointer hover:-rotate-45"
        >
          🚀
        </button>
      </div>
    </div>
  );
}

export default StartQuiz;
