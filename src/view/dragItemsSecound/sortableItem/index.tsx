"use client"

import { useSortable } from "@dnd-kit/sortable"
import { dragType } from "@/shared/types/dragType"
import { UniqueIdentifier } from "@dnd-kit/core"
import SortableItemView from "./view"
import { CSS } from "@dnd-kit/utilities"
import { CSSProperties } from "react"

interface props {
    item: dragType
    forcus?: UniqueIdentifier | null
    active?: boolean
}

const SortableItem = (props: props) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: props.item.id,
        })

    const style: CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <SortableItemView
            {...props}
            style={style}
            setNodeRef={setNodeRef}
            attributes={attributes}
            listeners={listeners}
        />
    )
}

export default SortableItem
