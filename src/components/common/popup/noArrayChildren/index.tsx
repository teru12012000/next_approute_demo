"use client"

import { ReactNode } from "react"
import NoArrayChildrenView from "./view"
import styles from "./style.css"

interface props {
    children: ReactNode
}

const NoArrayChildren = (props: props) => {
    console.log(props.children)

    return (
        <main className={styles.containar}>
            <div
                style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: 32,
                    fontWeight: "bold",
                }}
            >
                ここの部分、なんでchildrenをpropsで渡して表示させようとするとフリーズすんねん!!!!!
            </div>
        </main>
    )
}

export default NoArrayChildren
