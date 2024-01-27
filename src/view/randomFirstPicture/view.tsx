"use client"

import styles from "./style.css"
import Header from "@/components/common/Header"
import { pictureType } from "@/shared/types/apiType"
import Image from "next/image"

interface props {
    data?: pictureType[]
}

const RandomFirstPictureView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <div className={styles.imgBox}>
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
            </div>
        </div>
    )
}

export default RandomFirstPictureView
