import { CSSProperties, ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
    style?: CSSProperties
}

export const H1 = (props: props) => {
    return (
        <h1 className={styles.fontStyle} style={{ ...props.style }}>
            {props.children}
        </h1>
    )
}
