import { Dispatch, SetStateAction } from "react"
import styles from "./style.css"
import Tab from "@/components/common/tab"
import Header from "@/components/common/Header"

interface props {
    state: number
    setState: Dispatch<SetStateAction<number>>
}

const TabMenuPictureView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <main className={styles.mainContant}>
                <div>
                    <Tab state={props.state} setState={props.setState} />
                </div>
            </main>
        </div>
    )
}

export default TabMenuPictureView
