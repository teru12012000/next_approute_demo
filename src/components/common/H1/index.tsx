import { CSSProperties, ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
    style?: CSSProperties
}

const H1 = (props: props) => {
    return (
        <h1 className={styles.fontStyle} style={{ ...props.style }}>
            {props.children}
        </h1>
    )
}
export default H1
