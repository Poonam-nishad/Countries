import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
// export function useTheme(){
    // const [isDark, setIsDark] = useContext(ThemeContext);
export const useTheme = ()=>useContext(ThemeContext);

