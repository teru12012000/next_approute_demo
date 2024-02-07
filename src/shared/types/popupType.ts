import { ReactNode } from "react"

export type popupType = {
    flag: boolean
    contents?: ReactNode
}

export type popupState = {
    value: popupType
    setValue: (value: popupType) => void
}
