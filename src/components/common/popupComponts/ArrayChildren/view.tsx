import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode[]
}

const ArrayChildrenView = (props: props) => {
    return <main className={styles.containar}>{props.children}</main>
}

export default ArrayChildrenView
