import { pictureType } from "@/shared/types/apiType"
import { getPicture } from "@/model/getApi"
import PictureListView from "./view"

interface props {
    url: string
}

const PictureMenu = async (props: props) => {
    const data: pictureType[] = await getPicture(props.url)

    return <PictureListView data={data} />
}

export default PictureMenu
