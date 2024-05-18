function StartQuiz() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between p-4 items-center h-2/3 bg-slate-700 border rounded-lg w-1/2 background-Quiz font-Quiz">
        <h1 className="font-bold text-3xl">Quiz</h1>
        <p className="font-bold text-2xl">welcome to Quiz App</p>
        <div className="flex flex-col justify-center items-center font-bold text-2xl hover:scale-125 transition-all">
          <p>Get start</p>
          <p className="cursor-pointer hover:-rotate-45">🚀</p>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
