"use client"

import { useState } from "react"
import DragItemSecoundView from "./view"
import { dragType } from "@/shared/types/dragType"
import { dragItem } from "@/shared/data/dragItem/dragItem"
import {
    DragEndEvent,
    DragOverEvent,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"

const DragItemSecound = () => {
    const [data, setData] = useState<dragType[]>(dragItem)
    const [actived, setActived] = useState<dragType | null>(null)
    const [point, setPoint] = useState<UniqueIdentifier | null>(null)

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
        const searchIndex = data.findIndex(searchActive)

        setActived(data[searchIndex])

        setPoint(active.id)
    }

    const handleDragOver = (e: DragOverEvent) => {}

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e

        if (over !== null && active.id !== over.id) {
            const searchActive = (ele: dragType) => ele.id === active.id
            const activeIndex = dragItem.findIndex(searchActive)

            const searchOver = (ele: dragType) => ele.id === over.id
            const overIndex = dragItem.findIndex(searchOver)

            setData((data) => {
                return arrayMove(data, activeIndex, overIndex)
            })
        }

        setActived(null)

        setPoint(null)
    }

    return (
        <DragItemSecoundView
            data={data}
            actived={actived}
            sensors={sensors}
            point={point}
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
            handleDragStart={handleDragStart}
        />
    )
}

export default DragItemSecound
