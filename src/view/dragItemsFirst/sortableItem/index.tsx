"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import styles from "./style.css"
import { dragType } from "@/shared/types/dragType"
import { UniqueIdentifier } from "@dnd-kit/core"

interface props {
    item: dragType
    forcus?: UniqueIdentifier | null
    active?: boolean
}

const SortableItem = (props: props) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isSorting,
    } = useSortable({ id: props.item.id })

    return (
        <div>
            <div
                className={styles.box}
                ref={setNodeRef}
                style={{
                    border: !props.active ? "1px solid black" : "none",
                    backgroundColor: props.active ? "silver" : "white",
                }}
                {...attributes}
            >
                {!props.active && (
                    <>
                        <div
                            {...listeners}
                            style={{ fontSize: 32, marginRight: 20 }}
                        >
                            ≡
                        </div>
                        <div style={{ fontSize: 32, marginRight: 20 }}>
                            {props.item.content}
                        </div>
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

export default SortableItem
