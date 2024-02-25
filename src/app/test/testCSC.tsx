"use client"

import { ReactNode } from "react"

interface props {
    children: ReactNode
}

const TestCSC = (props: props) => {
    console.log("csc")

    return <>{props.children}</>
}

export default TestCSC
