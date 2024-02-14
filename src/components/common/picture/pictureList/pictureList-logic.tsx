import { pictureType } from "@/shared/types/apiType"
import { getPicture } from "@/model/getApi"
import { PictureListView } from "./pictureList-view"

interface props {
    url: string
}

export const PictureList = async (props: props) => {
    const data: pictureType[] = await getPicture(props.url)

    return <PictureListView data={data} />
}
