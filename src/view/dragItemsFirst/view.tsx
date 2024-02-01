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
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import styles from "./style.css"
import Header from "@/components/common/Header"
import { dragType } from "@/shared/types/dragType"
import SortableItem from "./sortableItem"

interface props {
    items: dragType[]
    sensors: SensorDescriptor<SensorOptions>[]
    handleDragStart: (e: DragStartEvent) => void
    handleDragEnd: (e: DragEndEvent) => void
    handleDragOver: (e: DragOverEvent) => void
    forcus: UniqueIdentifier | null
    actived: dragType | null
}

const DragItemsFirstView = (props: props) => {
    return (
        <div className={styles.containar}>
            <Header />
            <div className={styles.mainContent}>
                <div>
                    <DndContext
                        sensors={props.sensors}
                        collisionDetection={closestCenter}
                        onDragStart={props.handleDragStart}
                        onDragEnd={props.handleDragEnd}
                        onDragOver={props.handleDragOver}
                    >
                        <SortableContext
                            items={props.items}
                            strategy={verticalListSortingStrategy}
                        >
                            {props.items.map(
                                (item: dragType, index: number) => (
                                    <SortableItem
                                        key={index}
                                        item={item}
                                        forcus={props.forcus}
                                        active={item.id === props.actived?.id}
                                    />
                                ),
                            )}
                        </SortableContext>

                        {props.actived && (
                            <DragOverlay>
                                <SortableItem item={props.actived} />
                            </DragOverlay>
                        )}
                    </DndContext>
                </div>
            </div>
        </div>
    )
}

export default DragItemsFirstView
