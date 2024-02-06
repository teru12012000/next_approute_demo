import { Dispatch, SetStateAction } from "react"
import styles from "./style.css"
import Tab from "@/components/common/tab"
import Header from "@/components/common/Header"
import { pictureType } from "@/shared/types/apiType"
import Image from "next/image"

interface props {
    state: number
    setState: Dispatch<SetStateAction<number>>
    data?: pictureType[]
    controller: AbortController
}

const TabMenuPictureView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <main className={styles.mainContant}>
                <div>
                    <Tab
                        state={props.state}
                        setState={props.setState}
                        controller={props.controller}
                    />
                </div>
                <div className={styles.pictures}>
                    {props.data?.map((item: pictureType, index: number) => (
                        <div key={index} className={styles.picture}>
                            <Image
                                src={item.download_url}
                                alt={item.id}
                                width={320}
                                height={240}
                            />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default TabMenuPictureView
