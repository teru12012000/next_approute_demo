import { motion } from "framer-motion"
import styles from "./style.css"
import { popupType } from "@/shared/types/popupType"
import { ReactNode } from "react"

interface props {
    data: popupType
}

const PopupLayoutView = (props: props) => {
    return (
        <div className={styles.containar}>
            {props.data.flag && (
                <motion.div
                    className={styles.popupBackground}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {props.data.contents}
                </motion.div>
            )}
        </div>
    )
}

export default PopupLayoutView
