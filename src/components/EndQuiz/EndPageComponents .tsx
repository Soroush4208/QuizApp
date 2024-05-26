import { IoIosPlayCircle } from "react-icons/io";
import { useContextQuestions } from "../../context/ContextProvider";
import GREAT from "../../assets/svg/great.svg";
import GOOD from "../../assets/svg/good.svg";
import BAD from "../../assets/svg/bad.svg";
import TRY_MORE from "../../assets/svg/more.svg";

function EndPageComponents() {
  const { questionsState, questionsDispatch } = useContextQuestions();

  const Percent = Math.round(
    (questionsState.score / questionsState.arrayQuestions.length) * 100
  );

  return (
    <div className="flex flex-col items-center justify-between h-full ">
      <h1 className="font-bold text-3xl font-Quiz animate-pulse">Quiz</h1>
      {Percent > 80 ? (
        <div className="flex flex-col justify-center items-center ">
          <img
            className="rounded-full my-5 w-16"
            src={GREAT}
            alt="icon Result"
          />
          <h1 className="text-lg text-red-500 font-question heartbeat">you are great</h1>
        </div>
      ) : Percent > 60 ? (
        <div className="flex flex-col justify-center items-center ">
          <img
            className="rounded-full my-5 w-16"
            src={GOOD}
            alt="icon Result"
          />
          <h1 className="text-lg text-red-500 font-question heartbeat">you are good</h1>
        </div>
      ) : Percent >= 50 ? (
        <div className="flex flex-col justify-center items-center ">
          <img className="rounded-full my-5 w-16" src={BAD} alt="icon Result" />
          <h1 className="text-lg text-red-500 font-question heartbeat">
            you are not bad
          </h1>
        </div>
      ) : Percent < 50 ? (
        <div className="flex flex-col justify-center items-center ">
          <img
            className="rounded-full my-5 w-16"
            src={TRY_MORE}
            alt="icon Result"
          />
          <h1 className="text-lg text-red-500 font-question heartbeat">TRY MORE</h1>
        </div>
      ) : (
        ""
      )}
      <p className="font-bold text-2xl text-center font-question animatedElement">
        YOUR SCORE = {Percent} %
      </p>
      <div className="flex flex-col justify-center items-center hover:scale-150 mt-2">
        <button
          onClick={() => {
            return questionsDispatch({ type: "PAGE", payload: 0 });
          }}
          type="submit"
          className="flex items-center text-xl font-bold font-Quiz hover:text-green-600"
        >
          Ag
          <span className="text-2xl">
            <IoIosPlayCircle />
          </span>
          in
        </button>
      </div>
    </div>
  );
}

export default EndPageComponents;
