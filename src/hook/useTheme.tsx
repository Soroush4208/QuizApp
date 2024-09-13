import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// فرض کنید این هوک ThemeContext را برمی‌گرداند
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export default useTheme;
