import { createContext, useReducer } from "react";

export const TittleColorContext = createContext()

export const tittleColorReducer = (state, action) => {

    switch (action.type) {
        case "RED":
            return { ...state, color: "red" }
        case "BLUE":
            return {...state, color: "blue"}
            default:
                return state
    }

}

export const TittleColorContextProvider = (({ children }) => {

    const [state, dispatch] = useReducer(tittleColorReducer, { color: "purple" })

    console.log("Tittle Color Context:", state)

    return (
        <TittleColorContext.Provider value={{ ...state, dispatch }}>{children}</TittleColorContext.Provider>
    )

})