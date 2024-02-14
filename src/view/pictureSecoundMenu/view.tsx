"use client"

import { H1 } from "@/components/common/H1"
import { Header } from "@/components/common/Header/header-logic"
import ja from "@/shared/i18n/ja"
import styles from "./style.css"
import { pictureType } from "@/shared/types/apiType"
import { PictureList2 } from "@/components/common/picture/pictureList2"

interface props {
    data?: pictureType[][]
}

const PictureSecoundMenuView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <div>
                    <H1>{ja.pictureMenu2.title}</H1>
                    {props.data?.map((item: pictureType[], index: number) => (
                        <PictureList2 data={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PictureSecoundMenuView
