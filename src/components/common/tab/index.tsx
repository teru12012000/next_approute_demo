"use client"

import { Dispatch, SetStateAction } from "react"
import TabView from "./view"

interface props {
    state: number
    setState: Dispatch<SetStateAction<number>>
}

const Tab = (props: props) => {
    const handleClick = (index: number) => {
        props.setState(index)
    }

    return <TabView {...props} onClick={handleClick} />
}

export default Tab
