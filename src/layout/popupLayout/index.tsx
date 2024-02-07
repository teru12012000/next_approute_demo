"use client"

import { ReactNode } from "react"
import { usePopup } from "@/store/usePopup"
import PopupLayoutView from "./view"

interface props {
    children: ReactNode
}

const PopupLayout = (props: props) => {
    const { value } = usePopup()

    return <PopupLayoutView data={value} {...props} />
}

export default PopupLayout
