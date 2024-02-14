import { ReactNode } from "react"
import ArrayChildrenView from "./view"

interface props {
    children: ReactNode[]
}

const ArrayChildren = (props: props) => {
    return <ArrayChildrenView {...props} />
}

export default ArrayChildren
