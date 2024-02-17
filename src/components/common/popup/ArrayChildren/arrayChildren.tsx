import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode[]
}

export const ArrayChildren = (props: props) => {
    return <main className={styles.containar}>{props.children}</main>
}
