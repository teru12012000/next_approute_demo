import { getPicture } from "@/model/getApi"
import { PictureListView } from "./pictureList-view"
import { pictureType } from "../type"

interface props {
    url: string
}

export const PictureList = async (props: props) => {
    const data: pictureType[] = await getPicture(props.url)

    return <PictureListView data={data} />
}
