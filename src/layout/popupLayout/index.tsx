"use client"

import { ReactNode } from "react"
import { usePopup } from "@/store/usePopup"
import PopupLayoutView from "./view"

const PopupLayout = () => {
    const { value } = usePopup()

    return <PopupLayoutView data={value} />
}

export default PopupLayout
