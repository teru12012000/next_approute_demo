import PopupButton from "@/components/ui/popupButton"
import styles from "./style.css"

interface props {
    onClick: () => void
    value: string
    background?: string
}

export const OnePopupButton = (props: props) => {
    return (
        <div className={styles.containar}>
            <PopupButton {...props} />
        </div>
    )
}
