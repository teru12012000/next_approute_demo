"use client"

import styles from "./style.css"

interface props {
    onClick: () => void
    value: string
    background?: string
}

export const PopupButton = (props: props) => {
    return (
        <div>
            <button
                className={styles.button}
                style={{
                    backgroundColor: props.background ?? "gray",
                    border: props.background ?? "gray",
                }}
                onClick={props.onClick}
            >
                {props.value}
            </button>
        </div>
    )
}
