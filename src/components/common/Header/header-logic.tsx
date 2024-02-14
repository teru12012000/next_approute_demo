"use client"

import { useRouter } from "next/navigation"
import { useContext } from "react"
import { TransitionContext } from "@/provider/animation/animationContext"
import HeaderView from "./header-view"

export const Header = () => {
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

    return <HeaderView onClick={handleClick} />
}
