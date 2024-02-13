import { createContext } from "react";

export const AppContext = createContext()

export default AppContextProvider = ({ children }) => {
    const test = 'test'
    return(
        <AppContext.Provider
            value={{
                test,
            }}
        >
            { children }
        </AppContext.Provider>
    )
}