"use client"

import { usePopup } from "@/hooks/store/usePopup"
import PopupLayoutView from "./view"

const PopupLayout = () => {
    const [state, dispatch] = usePopup()

    return <PopupLayoutView data={state} />
}

export default PopupLayout
