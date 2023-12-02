"use client"
import ja from "@/shared/i18n/ja"
import styles from "./style.css"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { TransitionContext } from "@/provider/animation/animationContext"

const Header = () => {
    const router = useRouter()
    const [, setTransition] = useContext(TransitionContext)

    const handleClick = () => {
        setTransition({
            initial: {
                x: "-25%",
                zIndex: 0,
            },
            exit: {
                x: "100%",
                zIndex: 1,
            },
        })
        router.back()
    }

    return (
        <header className={styles.containar}>
            <button className={styles.buttonStyle} onClick={handleClick}>
                {ja.header.back}
            </button>
        </header>
    )
}

export default Header
