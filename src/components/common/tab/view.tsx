import styles from "./style.css"

interface props {
    state: number
    onClick: (index: number) => void
}

const TabView = (props: props) => {
    return (
        <div className={styles.containar}>
            <div className={styles.buttons}>
                {[...Array(3)].map((_, index) => (
                    <div key={index}>
                        <button
                            className={styles.button}
                            style={{
                                backgroundColor:
                                    index === props.state ? "red" : "white",
                            }}
                            onClick={() => props.onClick(index)}
                        >
                            {index + 1}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TabView
