import { useEffect, useState } from "react";
import { useContextQuestions } from "../../context/ContextProvider";
import Loading from "../Loading/Loading";

function Quiz() {
  const { questionsState, questionsDispatch } = useContextQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (questionsState.arrayQuestions.length > 0) {
      const answer = questionsState.arrayQuestions[
        currentQuestionIndex
      ].incorrect_answers.concat(
        questionsState.arrayQuestions[currentQuestionIndex].correct_answer
      );
      setAnswers(answer);
    }
  }, [currentQuestionIndex, questionsState.arrayQuestions]);

  // بررسی اینکه آیا سوالات وجود دارند
  if (
    !questionsState.arrayQuestions ||
    questionsState.arrayQuestions.length === 0
  ) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  let a = 1;
  const handleNext = () => {
    if (currentQuestionIndex < questionsState.arrayQuestions.length - 1) {
      console.log(a++);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      questionsDispatch({ type: "PAGE", payload: 3 });
    }
  };

  const currentQuestion = questionsState.arrayQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-between py-4 h-full items-center">
      <h1 className="font-bold text-3xl font-Quiz">Quiz</h1>
      <div className="flex flex-col gap-4 w-full px-8 font-question font-bold">
        <h2 className="bg-white font-bold text-center text-sm p-4 rounded-lg border-4 border-dashed">
          {currentQuestion.question}
        </h2>
        <div className="flex flex-col gap-2 font-bold mb-12">
          {answers.map((answer, index) => (
            <button
              className="bg-white hover:bg-gray-200 hover:text-red-600 py-1 text-center rounded-lg border cursor-pointer"
              onClick={handleNext}
              key={index}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
