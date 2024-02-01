"use client"

import { useSortable } from "@dnd-kit/sortable"
import styles from "./style.css"
import { dragType } from "@/shared/types/dragType"
import { UniqueIdentifier } from "@dnd-kit/core"
import SortableItemView from "./view"

interface props {
    item: dragType
    forcus?: UniqueIdentifier | null
    active?: boolean
}

const SortableItem = (props: props) => {
    const { attributes, listeners, setNodeRef } = useSortable({
        id: props.item.id,
    })

    return (
        <SortableItemView
            {...props}
            setNodeRef={setNodeRef}
            attributes={attributes}
            listeners={listeners}
        />
    )
}

export default SortableItem
