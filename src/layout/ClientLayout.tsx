"use client"

import { TransitionContext } from "@/provider/animation/animationContext"
import Provider from "@/provider/provider"
import { animationType } from "@/shared/types/provider"
import { AnimatePresence, motion } from "framer-motion"
import { useSelectedLayoutSegment } from "next/navigation"
import { ElementRef, ReactNode, forwardRef, useContext, useState } from "react"
import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"

interface props {
    children: ReactNode
}

const Child = forwardRef<
    ElementRef<typeof motion.div>,
    { children: ReactNode }
>((props, ref) => {
    const [transition] = useContext(TransitionContext)

    return (
        <motion.div
            ref={ref}
            initial={transition.initial}
            animate={{ x: 0, zIndex: 0 }}
            exit={transition.exit}
            transition={{
                duration: 0.333,
            }}
        >
            <Provider>{props.children}</Provider>
        </motion.div>
    )
})

Child.displayName = "Child"

const ClinentLayout = (props: props) => {
    const segment = useSelectedLayoutSegment()
    const [transition, setTransition] = useState<animationType>({
        initial: {
            x: "100%",
            zIndex: 1,
        },
        exit: {
            x: "0%",
            zIndex: 0,
        },
    })

    return (
        <CacheProvider>
            <ChakraProvider>
                <TransitionContext.Provider value={[transition, setTransition]}>
                    <AnimatePresence mode="popLayout" initial={false}>
                        <Child key={segment}>{props.children}</Child>
                    </AnimatePresence>
                </TransitionContext.Provider>
            </ChakraProvider>
        </CacheProvider>
    )
}

export default ClinentLayout
