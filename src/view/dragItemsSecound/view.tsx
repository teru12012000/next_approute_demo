"use client"

import { dragType } from "@/shared/types/dragType"
import {
    DndContext,
    DragEndEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    SensorDescriptor,
    SensorOptions,
    UniqueIdentifier,
    closestCenter,
} from "@dnd-kit/core"
import styles from "./style.css"
import Header from "@/components/common/Header"
import {
    SortableContext,
    horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import SortableItem from "./sortableItem"

interface props {
    data: dragType[]
    actived: dragType | null
    sensors: SensorDescriptor<SensorOptions>[]
    point: UniqueIdentifier | null
    handleDragStart: (e: DragStartEvent) => void
    handleDragEnd: (e: DragEndEvent) => void
    handleDragOver: (e: DragOverEvent) => void
}

const DragItemSecoundView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <div>
                <DndContext
                    sensors={props.sensors}
                    collisionDetection={closestCenter}
                    onDragStart={props.handleDragStart}
                    onDragEnd={props.handleDragEnd}
                    onDragOver={props.handleDragOver}
                >
                    <SortableContext
                        items={props.data}
                        strategy={horizontalListSortingStrategy}
                    >
                        <div className={styles.mainContent}>
                            {props.data.map((item: dragType, index: number) => (
                                <SortableItem
                                    key={index}
                                    item={item}
                                    active={item.id === props.actived?.id}
                                />
                            ))}
                        </div>
                    </SortableContext>
                    {props.actived && (
                        <DragOverlay>
                            <SortableItem item={props.actived} />
                        </DragOverlay>
                    )}
                </DndContext>
            </div>
        </div>
    )
}

export default DragItemSecoundView
