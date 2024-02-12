import { ReactNode } from "react"

export type popupType = "normal" | "oneButton"

export type popupAction = {
    popupType: popupType
    title: string
    onClick1?: () => void
    buttonValue1?: string
    color1?: string
    children: ReactNode
}

export type popupState = {
    state: popupAction | null
    errorMessage?: string
}
