import { routingType } from "@/shared/types/routing"
import { Button } from "@chakra-ui/react"
import styles from "./style.css"

interface props {
    routingList: routingType[]
    onClick: (url: string) => void
}

const RoutingButtonView = (props: props) => {
    return (
        <>
            {props.routingList.map((item: routingType, index: number) => (
                <div key={index} className={styles.buttonMargin}>
                    <Button onClick={() => props.onClick(item.url)}>
                        {item.title}
                    </Button>
                </div>
            ))}
        </>
    )
}

export default RoutingButtonView
