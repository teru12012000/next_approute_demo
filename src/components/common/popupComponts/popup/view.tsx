import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import ArrayChildren from "../ArrayChildren"
import NoArrayChildren from "../noArrayChildren"
import styles from "./style.css"

interface props {
    title: string
    icon?: StaticImageData
    children: ReactNode | ReactNode[]
}

const PopupView = (props: props) => {
    return (
        <motion.div
            className={styles.container}
            initial={{ y: "140%" }}
            animate={{ y: 0 }}
            exit={{ y: "140%" }}
        >
            <header className={styles.header} />
            <div className={styles.title}>
                {props.icon && (
                    <picture>
                        <Image src={props.icon} width={50} height={50} alt="" />
                    </picture>
                )}
                <div>{props.title}</div>
            </div>
            {Array.isArray(props.children) ? (
                <ArrayChildren>{props.children}</ArrayChildren>
            ) : (
                <NoArrayChildren>{props.children}</NoArrayChildren>
            )}
        </motion.div>
    )
}

export default PopupView
