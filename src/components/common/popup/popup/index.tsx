"use client"

import { StaticImageData } from "next/image"
import { ReactNode } from "react"
import PopupView from "./view"

interface props {
    title: string
    icon?: StaticImageData
    children: ReactNode | ReactNode[]
}

const Popup = (props: props) => {
    return <PopupView {...props} />
}

export default Popup
