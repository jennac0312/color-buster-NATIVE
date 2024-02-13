import { createContext, useState } from "react";

export const AppContext = createContext()

export default AppContextProvider = ({ children }) => {

    const test = 'test'
    const [ mode, setMode ] = useState(null)

    return(
        <AppContext.Provider
            value={{
                test,
                mode, setMode
            }}
        >
            { children }
        </AppContext.Provider>
    )
}