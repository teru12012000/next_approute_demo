"use client"

import PopupVarifyView from "./view"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { TransitionContext } from "@/store/animation/animationContext"
import { usePopup } from "@/store/popup"

const PopupVarify = () => {
    const router = useRouter()
    const [, setTransition] = useContext(TransitionContext)
    const [state, dispatch] = usePopup()

    const handleOpen = () => {
        setTransition({
            initial: {
                x: "-25%",
                zIndex: 0,
            },
            exit: {
                x: "100%",
                zIndex: 0.5,
            },
        })

        dispatch({
            popupType: "normal",
            title: "確認",
            children: (
                <div
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                    }}
                >
                    登録しました。
                </div>
            ),
        })

        setTimeout(() => {
            dispatch(null)
        }, 3000)

        router.push("/")
    }

    return <PopupVarifyView onClick={handleOpen} />
}

export default PopupVarify
