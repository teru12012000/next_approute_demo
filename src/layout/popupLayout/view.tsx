import { motion } from "framer-motion"
import styles from "./style.css"
import { popupType } from "@/shared/types/popupType"
import { ReactNode } from "react"

interface props {
    data: popupType
    children: ReactNode
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
            {props.children}
        </div>
    )
}

export default PopupLayoutView
