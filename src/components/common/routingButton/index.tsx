"use client"

import { TransitionContext } from "@/provider/animation/animationContext"
import { routingType } from "@/shared/types/routing"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import RoutingButtonView from "./view"

interface props {
    routingList: routingType[]
}

const RoutingButton = (props: props) => {
    const router = useRouter()
    const [, setTransition] = useContext(TransitionContext)

    const handleClick = (url: string) => {
        setTransition({
            initial: {
                x: "100%",
                zIndex: 1,
            },
            exit: {
                x: "-25%",
                zIndex: 0,
            },
        })

        router.push(url)
    }

    return (
        <RoutingButtonView
            routingList={props.routingList}
            onClick={handleClick}
        />
    )
}

export default RoutingButton
