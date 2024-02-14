import { ReactNode } from "react"

interface props {
    children: ReactNode
}

const PopupContents = (props: props) => {
    return <PopupContents {...props} />
}

export default PopupContents
