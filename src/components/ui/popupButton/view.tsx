"use client"

import styles from "./style.css"

interface props {
    onClick: () => void
    value: string
    background?: string
}

const PopupButtonView = (props: props) => {
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

export default PopupButtonView
