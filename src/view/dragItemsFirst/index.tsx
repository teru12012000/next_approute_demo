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
} from "@dnd-kit/core"

import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import SortableItem from "./sortableItem"

const DragItemsFirst = () => {
    const [items, setItems] = useState<number[]>([1, 2, 3])
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e

        if (active.id !== over?.id) {
            setItems((items: number[]) => {
                const oldIndex = items.indexOf(Number(active.id))
                const newIndex = items.indexOf(over ? Number(over.id) : 0)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    return (
        <div className={styles.containar}>
            <Header />
            <div className={styles.mainContent}>
                <div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext
                            items={items}
                            strategy={verticalListSortingStrategy}
                        >
                            {items.map((item: number, index: number) => (
                                <SortableItem key={index} id={item} />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </div>
    )
}

export default DragItemsFirst
