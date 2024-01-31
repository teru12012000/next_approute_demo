"use client"

import Header from "@/components/common/Header"
import styles from "./style.css"
import { DragEvent, useState } from "react"
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    UniqueIdentifier,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
} from "@dnd-kit/core"

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import SortableItem from "./sortableItem"
import { dragType } from "@/shared/types/dragType"
import { dragItem } from "@/shared/data/dragItem/dragItem"

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
        <div className={styles.containar}>
            <Header />
            <div className={styles.mainContent}>
                <div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                    >
                        <SortableContext
                            items={items}
                            strategy={verticalListSortingStrategy}
                        >
                            {items.map((item: dragType, index: number) => (
                                <SortableItem
                                    key={index}
                                    item={item}
                                    forcus={forcus}
                                    active={item.id === actived?.id}
                                />
                            ))}
                        </SortableContext>

                        {actived && (
                            <DragOverlay>
                                <SortableItem item={actived} />
                            </DragOverlay>
                        )}
                    </DndContext>
                </div>
            </div>
        </div>
    )
}

export default DragItemsFirst
