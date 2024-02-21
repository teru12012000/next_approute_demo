"use client"

import { popupAction } from "@/shared/types/popupReducer"
import { popupState } from "@/shared/types/popupReducer"
import { Dispatch, ReactNode, Reducer, createContext, useReducer } from "react"
import { popupReducer } from "./popupReducer"

const initializeState: popupState = {
    state: null,
}

export const PopupContext = createContext<
    [popupState, Dispatch<popupAction | null>] | undefined
>(undefined)

interface props {
    children: ReactNode
}

export const PopupProvider = (props: props) => {
    const [state, dispatch] = useReducer<
        Reducer<popupState, popupAction | null>
    >(popupReducer, initializeState)

    return (
        <PopupContext.Provider value={[state, dispatch]}>
            {props.children}
        </PopupContext.Provider>
    )
}
