import styles from "./style.css"

interface props {
    onClick: () => void
}

const PopupVarifyView = (props: props) => {
    return (
        <div className={styles.containar}>
            <div className={styles.mainContent}>
                <button className={styles.button} onClick={props.onClick}>
                    ポップアップ出すぜ！！
                </button>
            </div>
        </div>
    )
}

export default PopupVarifyView
