"use client"

import { usePopup } from "@/hooks/store/usePopup"
import PopupLayoutView from "./view"
import { useEffect } from "react"

const PopupLayout = () => {
    const [state, dispatch] = usePopup()

    useEffect(() => {
        console.log(state.state?.children)
    }, [state])

    return <PopupLayoutView data={state} />
}

export default PopupLayout
