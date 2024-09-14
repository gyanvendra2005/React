import { createContext, React, useContext } from "react";

export const themecontext = createContext(
    {
        Theme:"light",
        lightTheme: () => {},
        darkTheme: () =>{},
        
    }
)

export const ThemeProvider = themecontext.Provider

export default function useTheam() {
    return useContext(themecontext)
}