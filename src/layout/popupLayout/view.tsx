"use client"

import { AnimatePresence } from "framer-motion"
import { popupState } from "@/shared/types/popupReducer"
import Popup from "@/components/common/popup/popup"
import PopupContents from "@/components/common/popup/popupContents"

interface props {
    data: popupState
}

const PopupLayoutView = (props: props) => {
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
