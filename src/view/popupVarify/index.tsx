"use client"

import { usePopup } from "@/store/usePopup"
import PopupVarifyView from "./view"
import Popup1 from "@/components/view/popup1"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { TransitionContext } from "@/provider/animation/animationContext"

const PopupVarify = () => {
    const router = useRouter()
    const [, setTransition] = useContext(TransitionContext)
    const { setValue } = usePopup()

    const handleClose = () => {
        setValue({
            flag: false,
        })
    }

    const handleOpen = () => {
        console.log("hofehoge")

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

        setValue({
            flag: true,
            contents: (
                <Popup1 title="確認" onClick={handleClose} buttonValue="閉じる">
                    <div
                        style={{
                            fontSize: 24,
                            color: "balck",
                            fontWeight: "bold",
                        }}
                    >
                        登録しました。
                    </div>
                </Popup1>
            ),
        })

        router.push("/")
    }

    return <PopupVarifyView onClick={handleOpen} />
}

export default PopupVarify
