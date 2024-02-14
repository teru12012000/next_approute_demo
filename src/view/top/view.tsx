import { H1 } from "@/components/common/H1"
import styles from "./style.css"
import ja from "@/shared/i18n/ja"
import RoutingButton from "@/components/common/routingButton"
import { routingPage } from "@/shared/data/routing/pages"

const TopView = () => {
    return (
        <div className={styles.containar}>
            <div className={styles.mainContent}>
                <div>
                    <H1>{ja.home.title}</H1>
                    <RoutingButton routingList={routingPage} />
                </div>
            </div>
        </div>
    )
}

export default TopView
