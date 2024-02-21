import { animationType } from "@/shared/types/provider"
import { Dispatch, SetStateAction, createContext } from "react"

export const TransitionContext = createContext<
    [animationType, Dispatch<SetStateAction<animationType>>]
>([
    {
        initial: {
            x: "100%",
            zIndex: 1,
        },
        exit: {
            x: "0%",
            zIndex: 0,
        },
    },
    () => {},
])
