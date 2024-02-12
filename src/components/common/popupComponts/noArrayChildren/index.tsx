import { ReactNode } from "react"
import NoArrayChildrenView from "./view"
import styles from "./style.css"

interface props {
    children: ReactNode
}

const NoArrayChildren = (props: props) => {
    console.log(props.children)

    return <div className={styles.containar}>ばーか</div>
}

export default NoArrayChildren
