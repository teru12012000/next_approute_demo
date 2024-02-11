import { motion } from "framer-motion"
import styles from "./style.css"
import { popupState } from "@/shared/types/popupReducer"

interface props {
    data: popupState
}

const PopupLayoutView = (props: props) => {
    return (
        <div>
            {props.data.state !== null && (
                <motion.div
                    className={styles.popupBackground}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                ></motion.div>
            )}
        </div>
    )
}

export default PopupLayoutView
