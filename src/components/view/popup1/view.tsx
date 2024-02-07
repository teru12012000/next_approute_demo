import OnePopupButton from "@/components/common/popupComponts/onePopupButton"
import Popup from "@/components/common/popupComponts/popup"
import PopupContents from "@/components/common/popupComponts/popupContents"
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
