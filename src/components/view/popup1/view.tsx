import { OnePopupButton } from "@/components/common/popup"
import { Popup } from "@/components/common/popup"
import { PopupContents } from "@/components/common/popup"
import { ReactNode } from "react"

interface props {
    title: string
    buttonValue: string
    onClick: () => void
    children: ReactNode
}

const Popup1View = (props: props) => {
    return (
        <Popup title={props.title}>
            <PopupContents>{props.children}</PopupContents>
            <OnePopupButton onClick={props.onClick} value={props.buttonValue} />
        </Popup>
    )
}

export default Popup1View
