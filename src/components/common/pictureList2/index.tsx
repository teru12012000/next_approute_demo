import { pictureType } from "@/shared/types/apiType"
import styles from "./style.css"
import Image from "next/image"
import PictureList2View from "./view"

interface props {
    data?: pictureType[]
}

const PicutreList2 = (props: props) => {
    return <PictureList2View {...props} />
}

export default PicutreList2
