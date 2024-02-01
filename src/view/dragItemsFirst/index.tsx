"use client"

import { useState } from "react"
import {
    KeyboardSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    DragOverEvent,
    DragStartEvent,
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { dragType } from "@/shared/types/dragType"
import { dragItem } from "@/shared/data/dragItem/dragItem"
import DragItemsFirstView from "./view"

const DragItemsFirst = () => {
    const [items, setItems] = useState<dragType[]>(dragItem)
    const [forcus, setForcus] = useState<UniqueIdentifier | null>(null)
    const [actived, setActived] = useState<dragType | null>(null)

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )

    const handleDragStart = (e: DragStartEvent) => {
        const { active } = e

        const searchActive = (ele: dragType) => ele.id === active.id
        const searchIndex = items.findIndex(searchActive)

        setActived(items[searchIndex])
    }

    const handleDragOver = (e: DragOverEvent) => {
        const { over } = e

        setForcus(over !== null ? over.id : null)
    }

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e

        if (over !== null && active.id !== over.id) {
            setItems((items: dragType[]) => {
                const searchActive = (ele: dragType) => ele.id === active.id
                const searchOver = (ele: dragType) => ele.id === over?.id

                const oldIndex = items.findIndex(searchActive)
                const newIndex = items.findIndex(searchOver)

                return arrayMove(items, oldIndex, newIndex)
            })
        }

        setForcus(null)

        setActived(null)
    }

    return (
        <DragItemsFirstView
            items={items}
            sensors={sensors}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDragEnd={handleDragEnd}
            forcus={forcus}
            actived={actived}
        />
    )
}

export default DragItemsFirst
