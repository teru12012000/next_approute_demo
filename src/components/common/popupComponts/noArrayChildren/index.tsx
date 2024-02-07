import { ReactNode } from "react"

interface props {
    children: ReactNode
}

const NoArrayChildren = (props: props) => {
    return <NoArrayChildren {...props} />
}

export default NoArrayChildren
