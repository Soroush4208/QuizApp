import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log("context is nit found");
  }
  return context;
}

export default useTheme;
