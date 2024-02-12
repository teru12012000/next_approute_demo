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
    console.log(Array.isArray(props.children))
    return (
        <motion.div
            className={styles.popupBackground}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.333 }}
        >
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
                            <Image
                                src={props.icon}
                                width={50}
                                height={50}
                                alt=""
                            />
                        </picture>
                    )}
                    <div>{props.title}</div>
                </div>
                {!Array.isArray(props.children) ? (
                    <div>
                        <NoArrayChildren>{props.children}</NoArrayChildren>
                    </div>
                ) : null}
            </motion.div>
        </motion.div>
    )
}

export default PopupView
