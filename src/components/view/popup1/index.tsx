"use client"

import { ReactNode } from "react"
import Popup1View from "./view"

interface props {
    title: string
    buttonValue: string
    onClick: () => void
    children: ReactNode
}

const Popup1 = (props: props) => {
    return <Popup1View {...props} />
}

export default Popup1
