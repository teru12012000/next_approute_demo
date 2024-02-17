import { ReactNode } from "react"

interface props {
    children: ReactNode
}

export const PopupContents = (props: props) => {
    return <>{props.children}</>
}
