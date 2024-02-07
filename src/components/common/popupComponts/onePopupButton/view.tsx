import PopupButton from "@/components/ui/popupButton"
import styles from "./style.css"

interface props {
    onClick: () => void
    value: string
    background?: string
}

const OnePopupButtonView = (props: props) => {
    return (
        <div className={styles.containar}>
            <PopupButton {...props} />
        </div>
    )
}

export default OnePopupButtonView
