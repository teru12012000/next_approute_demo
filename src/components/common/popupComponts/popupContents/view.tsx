import { ReactNode } from "react"

interface props {
    children: ReactNode
}

const PopupContentsView = (props: props) => {
    return <>{props.children}</>
}

export default PopupContentsView
