import Image from "next/image"
import { pictureType } from "@/shared/types/apiType"
import { getPicture } from "@/util/getApi"
import styles from "./style.css"
interface props {
    url: string
}

const PictureMenu = async (props: props) => {
    console.log(props.url)
    const data: pictureType[] = await getPicture(props.url)

    return (
        <div className={styles.containar}>
            {data.map((item: pictureType, index: number) => (
                <div key={index} className={styles.itemMargin}>
                    <Image
                        src={item.download_url}
                        width={200}
                        height={120}
                        alt={item.id}
                    />

                    <p>
                        {item.id}:{item.author}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default PictureMenu
