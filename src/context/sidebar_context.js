import React, {createContext, useContext, useReducer} from "react";

const initialState = {
    isSidebarOpen: false
}

const reducer = (state, action) => {
    if (action.type === "SIDEBAR_OPEN") {
        return {...state, isSidebarOpen: true}
    }
    if (action.type === "SIDEBAR_CLOSE") {
        return {...state, isSidebarOpen: false}
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

const SidebarContext = createContext()

export const SidebarProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        dispatch({type: "SIDEBAR_OPEN"})
    }

    const closeSidebar = () => {
        dispatch({type: "SIDEBAR_CLOSE"})
    }

    return (
        <SidebarContext.Provider value={{...state, openSidebar, closeSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(SidebarContext)
}
