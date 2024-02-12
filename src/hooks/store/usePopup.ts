"use client"

import { PopupContext } from "@/store/popup/popupContext"
import { useContext } from "react"

export const usePopup = () => {
    const context = useContext(PopupContext)

    if (context === undefined) throw new Error("Function's value is undefined")

    return context
}
