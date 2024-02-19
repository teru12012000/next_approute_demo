"use client"

import { ReactNode } from "react"
import { OnePopupButton, Popup, PopupContents } from "@/components/common/popup"

interface props {
    title: string
    buttonValue: string
    onClick: () => void
    children: ReactNode
}

export const Popup1 = (props: props) => {
    return (
        <Popup title={props.title}>
            <PopupContents>{props.children}</PopupContents>
            <OnePopupButton onClick={props.onClick} value={props.buttonValue} />
        </Popup>
    )
}
