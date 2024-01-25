"use client"

import useSWR from "swr"
import styles from "./style.css"
import Header from "@/components/common/Header"
import { getPicture } from "@/model/getApi"
import { pictureType } from "@/shared/types/apiType"
import Image from "next/image"
import { getRandom } from "@/model/getRandom"

const RandomPicture = () => {
    const { data: random } = useSWR("/api", getRandom)
    const {
        data: pictures,
        isLoading: pictureLoading,
        error: pictureError,
    } = useSWR(
        `http://picsum.photos/v2/list?page=${random?.id}&limit=10`,
        getPicture,
    )

    if (pictureLoading) {
        return <div>Loading....</div>
    }

    if (pictureError) {
        return <div>error</div>
    }

    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <div className={styles.imgBox}>
                    {pictures?.map((item: pictureType, index: number) => (
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
            </div>
        </div>
    )
}

export default RandomPicture
