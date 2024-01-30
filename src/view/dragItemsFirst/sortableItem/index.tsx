"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import styles from "./style.css"

interface props {
    id: number
}

const SortableItem = (props: props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: props.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        touchAction: "manipulation",
    }
    return (
        <div
            className={styles.box}
            ref={setNodeRef}
            style={style}
            {...attributes}
        >
            <div {...listeners}>{props.id}</div>
        </div>
    )
}

export default SortableItem
