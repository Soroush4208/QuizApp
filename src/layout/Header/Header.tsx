import { IoSunny } from "react-icons/io5";
import useTheme from "../../hook/useTheme";

function Header() {
  const { changeMode, mode } = useTheme();

  function toggleMode() {
    changeMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <div className="fixed top-2 left-2 z-10 cursor-pointer">
      <IoSunny onClick={toggleMode} style={{filter:mode==="dark"?"invert(100%)":"invert(0%)"}}/>
    </div>
  );
}

export default Header;
