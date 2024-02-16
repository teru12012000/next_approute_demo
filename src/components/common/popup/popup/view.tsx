import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"
import ArrayChildren from "../ArrayChildren"
import NoArrayChildren from "../noArrayChildren"
import styles from "./style.css"
import { H1 } from "@/components/common/H1"

interface props {
    title: string
    icon?: StaticImageData
    children: ReactNode | ReactNode[]
}

const PopupView = (props: props) => {
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
                initial={{ y: "120%" }}
                animate={{ y: ["120%", "50%", "20%", "10%", "-50%"] }}
                exit={{ y: "120%" }}
                transition={{ times: [0, 0.333, 0.9, 1, 1.2] }}
            >
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
                    <H1>怒り</H1>
                </div>
                {!Array.isArray(props.children) ? (
                    <NoArrayChildren>{props.children}</NoArrayChildren>
                ) : null}
            </motion.div>
        </motion.div>
    )
}

export default PopupView
