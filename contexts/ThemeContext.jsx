import { createContext, useState } from "react";

export const ThemeContext = createContext('poonam')

export function ThemeProvider({children}){
    console.log(children);
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
    </ThemeContext.Provider>
    // return <ThemeContext.Provider>
    // </ThemeContext.Provider>
}