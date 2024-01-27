import H1 from "@/components/common/H1"
import Header from "@/components/common/Header"
import PictureList from "@/components/common/pictureList"
import { apiUrl } from "@/shared/data/api/apiUrl"
import ja from "@/shared/i18n/ja"
import styles from "./style.css"

const PictureFirstMenuView = () => {
    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <div>
                    <H1>{ja.pictureMenu.title}</H1>
                    {apiUrl.map((item: string, index: number) => (
                        <div key={index} className={styles.itemMargin}>
                            <PictureList url={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PictureFirstMenuView
