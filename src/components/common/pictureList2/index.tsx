import { pictureType } from "@/shared/types/apiType"
import styles from "./style.css"
import Image from "next/image"

interface props {
    data?: pictureType[]
}

const PicutreList2 = (props: props) => {
    return (
        <div className={styles.containar}>
            {props.data?.map((item: pictureType, index: number) => (
                <div key={index} className={styles.itemMargin}>
                    <Image
                        src={item.download_url}
                        width={320}
                        height={240}
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

export default PicutreList2
