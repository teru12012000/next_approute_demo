"use client"

import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    children: ReactNode
}

export const NoArrayChildren = (props: props) => {
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
