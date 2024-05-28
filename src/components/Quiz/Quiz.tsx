import { useEffect, useState } from "react";
import { useContextQuestions } from "../../context/ContextProvider";
import Loading from "../Loading/Loading";

function Quiz() {
  const { questionsState, questionsDispatch } = useContextQuestions();
  const [answers, setAnswers] = useState<string[]>([]);

  //! (score/questionsState.arrayQuestions.length)*100

  // useEffect(() => {
  //   if (questionsState.arrayQuestions.length > 0) {
  //     const answer = questionsState.arrayQuestions[
  //       currentQuestionIndex
  //     ].incorrect_answers.concat(
  //       questionsState.arrayQuestions[currentQuestionIndex].correct_answer
  //     );
  //     setAnswers(answer);
  //   }
  // }, [currentQuestionIndex, questionsState.arrayQuestions]);

  useEffect(() => {
    if (questionsState.arrayQuestions.length > 0) {
      const answer = questionsState.arrayQuestions[
        questionsState.index
      ].incorrect_answers
        .concat(
          questionsState.arrayQuestions[questionsState.index].correct_answer
        )
        .sort(() => Math.random() - 0.5); // برای مخلوط کردن جواب‌ها برای اینک همیشه گزینه آخر نباشه
      setAnswers(answer);
    }
  }, [questionsState.index, questionsState.arrayQuestions]);
  console.log(questionsState);

  // بررسی اینکه آیا سوالات وجود دارند
  if (
    !questionsState.arrayQuestions ||
    questionsState.arrayQuestions.length === 0
  ) {
    return <Loading />;
  }
  console.log(answers);

  function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
    if (questionsState.index < questionsState.arrayQuestions.length - 1) {
      questionsDispatch({ type: "QUESTION_INDEX" });
    } else {
      questionsDispatch({ type: "CHANGE_PAGE", payload: 3 });
    }

    if (
      e.currentTarget.innerText ===
      questionsState.arrayQuestions[questionsState.index].correct_answer
    ) {
      questionsDispatch({ type: "ADD_SCORE", payload: +1 });
    }
  }

  const currentQuestion = questionsState.arrayQuestions[questionsState.index];

  return (
    <div className="flex flex-col justify-between py-4 h-full items-center">
      <h1 className="font-bold text-3xl font-Quiz animate-pulse">Quiz</h1>
      <div className="flex flex-col gap-4 w-full px-8 font-question font-bold">
        <h2 className="bg-white font-bold text-center text-sm p-4 rounded-lg border-4 border-dashed">
          {questionsState.index + 1} - {currentQuestion.question}
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
