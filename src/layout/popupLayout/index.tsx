"use client"

import { usePopup } from "@/store/popup"
import PopupLayoutView from "./view"

const PopupLayout = () => {
    const [state, dispatch] = usePopup()

    return <PopupLayoutView data={state} />
}

export default PopupLayout
