"use client"

import { useState } from "react"
import TabMenuPictureView from "./view"
import { useAPI } from "@/hooks/model/useAPI"

const TabMenuPicture = () => {
    const [state, setState] = useState<number>(0)
    const { data, controller } = useAPI(
        `https://picsum.photos/v2/list?page=${state + 1}&limit=33`,
    )

    return (
        <TabMenuPictureView
            state={state}
            setState={setState}
            data={data}
            controller={controller}
        />
    )
}

export default TabMenuPicture
