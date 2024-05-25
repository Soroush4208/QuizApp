import MAN_ICON from "../../assets/svg/man.svg";

function Loading() {
  return (
    <div className="fixed top-[43%] left-[45%]">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-28 w-28 border-t-4 border-b-4 border-red-600"></div>
        <img src={MAN_ICON} alt="Loading" className="rounded-full h-24 w-24" />
      </div>

      <h1 className="fixed top-[60%] left-[39%] font-question">
        The page is loading, please wait...
      </h1>
    </div>
  );
}

export default Loading;
