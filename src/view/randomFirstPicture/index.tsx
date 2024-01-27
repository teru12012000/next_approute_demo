"use client"

import { getPicture } from "@/model/getApi"
import { getRandom } from "@/model/getRandom"
import useSWR from "swr"
import RandomFirstPictureView from "./view"

const RandomFirstPicture = () => {
    const { data: random } = useSWR("/api", getRandom)

    const {
        data: pictures,
        isLoading: pictureLoading,
        error: pictureError,
    } = useSWR(
        `https://picsum.photos/v2/list?page=${random?.id}&limit=10`,
        getPicture,
    )

    if (pictureLoading) {
        return <div>Loading....</div>
    }

    if (pictureError) {
        return <div>error</div>
    }

    return <RandomFirstPictureView data={pictures} />
}

export default RandomFirstPicture
