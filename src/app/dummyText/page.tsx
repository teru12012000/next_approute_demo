import H1 from "@/components/common/H1"
import styles from "./style.css"
import ja from "@/shared/i18n/ja"
import Header from "@/components/common/Header"

const DummyText = () => {
    return (
        <div className={styles.containar}>
            <Header />
            <div className={styles.mainContent}>
                <div>
                    <H1>{ja.dummyText.title}</H1>
                    <p>{ja.dummyText.content}</p>
                </div>
            </div>
        </div>
    )
}

export default DummyText
