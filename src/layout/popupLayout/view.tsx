"use client"

import { AnimatePresence } from "framer-motion"
import { popupState } from "@/shared/types/popupReducer"
import Popup from "@/components/common/popupComponts/popup"
import PopupContents from "@/components/common/popupComponts/popupContents"

interface props {
    data: popupState
}

const PopupLayoutView = (props: props) => {
    console.log(props.data.state?.children)

    return (
        <AnimatePresence>
            {props.data.state && props.data.state.popupType === "normal" ? (
                <Popup title={props.data.state.title}>
                    <PopupContents>{props.data.state.children}</PopupContents>
                </Popup>
            ) : null}
        </AnimatePresence>
    )
}

export default PopupLayoutView
