import axios from "axios";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { useContextQuestions } from "../../context/ContextProvider";
import { categories, difficulties } from "../../constant/constant";

function SetupQuiz() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [validation, setValidation] = useState("");
  const { questionsDispatch } = useContextQuestions();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const result = res.data.results;
      // setQuestions(res.data.results);
      console.log(result);
      questionsDispatch({ type: "QUESTION", payload: result });
      setAmount("");
      setCategory("");
      setDifficulty("");
      // console.log(questions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const amountNum = +(amount);
    if (amountNum < 5 || amountNum > 55) {
      setValidation("Please Enter A Number Between 5 And 55");
    } else {
      setValidation("");
      getData();
      questionsDispatch({ type: "PAGE", payload: 2 });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen max-h-full">
      <div className="flex flex-col justify-between fixed p-4 items-center border w-full h-full sm:w-1/2 sm:h-2/3 sm:rounded-lg sm:background-Quiz">
        <h1 className="font-bold text-3xl font-Quiz animate-pulse">Quiz</h1>
        <p className="font-bold text-2xl text-center font-Quiz">Setup Quiz</p>
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full p-2 gap-2 font-question"
          >
            <label className="text-xs pl-1 font-bold">
              Number Of Questions
            </label>
            <input
              className="border outline-none font-bold text-xs px-1 h-8 rounded-md"
              placeholder="Specify the number of questions"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <span
              className={`text-red-600 text-xs font-bold ${amount && "hidden"}`}
            >
              {validation}
            </span>
            <label className="text-xs pl-1 font-bold">Category</label>
            <select
              name="select"
              id="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="outline-none font-bold text-sm px-1 h-8 rounded-md"
            >
              {categories.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label className="text-xs pl-1 font-bold">Difficulty</label>
            <select
              name="select"
              id="select"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="outline-none font-bold text-sm px-1 h-8 rounded-md "
            >
              {difficulties.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="flex flex-col justify-center items-center hover:scale-150 mt-2">
              <button
                type="submit"
                className="flex items-center text-xl font-bold font-Quiz hover:text-red-700"
              >
                St
                <span className="text-2xl">
                  <IoIosPlayCircle />
                </span>
                rt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetupQuiz;
