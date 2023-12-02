"use client"

import { TransitionContext } from "@/provider/animation/animationContext"
import { routingType } from "@/shared/types/routing"
import { Button } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import styles from "./style.css"

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
        <>
            {props.routingList.map((item: routingType, index: number) => (
                <div key={index} className={styles.buttonMargin}>
                    <Button onClick={() => handleClick(item.url)}>
                        {item.title}
                    </Button>
                </div>
            ))}
        </>
    )
}

export default RoutingButton
