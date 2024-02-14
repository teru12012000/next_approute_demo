"use client"

import ja from "@/shared/i18n/ja"
import styles from "./style.css"

interface props {
    onClick: () => void
}

const HeaderView = (props: props) => {
    return (
        <header className={styles.containar}>
            <button className={styles.buttonStyle} onClick={props.onClick}>
                {ja.header.back}
            </button>
        </header>
    )
}

export default HeaderView
