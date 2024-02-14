import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
}

const NoArrayChildrenView = (props: props) => {
    return <main className={styles.containar}>{props.children}</main>
}

export default NoArrayChildrenView
