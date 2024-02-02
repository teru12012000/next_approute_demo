import { dragType } from "@/shared/types/dragType"
import styles from "./style.css"
import { DraggableAttributes, UniqueIdentifier } from "@dnd-kit/core"
import { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities"
import ja from "@/shared/i18n/ja"
import { CSSProperties } from "react"

interface props {
    item: dragType
    forcus?: UniqueIdentifier | null
    active?: boolean
    style: CSSProperties
    setNodeRef: (node: HTMLElement | null) => void
    attributes: DraggableAttributes
    listeners: SyntheticListenerMap | undefined
}

const SortableItemView = (props: props) => {
    return (
        <div
            style={{
                width: "75%",
            }}
        >
            <div
                className={styles.box}
                ref={props.setNodeRef}
                style={{
                    border: !props.active ? "1px solid black" : "none",
                    backgroundColor: props.active ? "silver" : "white",
                }}
                {...props.attributes}
            >
                {!props.active && (
                    <>
                        <div {...props.listeners} className={styles.font}>
                            {ja.dragItems1.pick}
                        </div>
                        <div className={styles.font}>{props.item.content}</div>
                    </>
                )}
            </div>
            <div className={styles.underLineBox}>
                {props.forcus === props.item.id && (
                    <div className={styles.underLine} />
                )}
            </div>
        </div>
    )
}

export default SortableItemView
