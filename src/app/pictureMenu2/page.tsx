"use client"

import H1 from "@/components/common/H1"
import Header from "@/components/common/Header"
import { getPromisePicture } from "@/model/promisePicture"
import { apiUrl } from "@/shared/data/api/apiUrl"
import ja from "@/shared/i18n/ja"
import useSWR from "swr"
import styles from "./style.css"
import { pictureType } from "@/shared/types/apiType"
import PictureList2 from "@/components/common/pictureList2"

const PictureMenu2 = () => {
    const { data, isLoading, error } = useSWR(apiUrl, getPromisePicture)

    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <div>
                    <H1>{ja.pictureMenu2.title}</H1>
                    {data?.map((item: pictureType[], index: number) => (
                        <PictureList2 data={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PictureMenu2
