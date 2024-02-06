"use client"

import { useState } from "react"
import TabMenuPictureView from "./view"

const TabMenuPicture = () => {
    const [state, setState] = useState<number>(0)

    return <TabMenuPictureView state={state} setState={setState} />
}

export default TabMenuPicture
