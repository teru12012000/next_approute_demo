"use client"

import { useFile } from "@/store/file/file"
import { useState } from "react"
import { fileType, overType, pickType } from "./folderFile.type"
import {
    DragEndEvent,
    DragOverEvent,
    DragStartEvent,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"

export const FolderFile = () => {
    const { file, setFile } = useFile()
    const [activeItem, setActiveItem] = useState<fileType | null>(null)
    const [overed, setOvered] = useState<overType | null>(null)

    const sensor = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            scrollBehavior: "smooth",
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )

    const handleDragStart = (e: DragStartEvent) => {
        const { active } = e
        const isSearchActive = (value: fileType): boolean =>
            value.id === active.id

        const itemIndex: number = file.findIndex(isSearchActive)

        setActiveItem(file[itemIndex])
    }

    const handleDragOver = (e: DragOverEvent) => {
        const { active } = e

        const isSearchActive = (value: fileType): boolean =>
            value.id === active.id

        const itemIndex: number = file.findIndex(isSearchActive)

        if (file[itemIndex].folder && activeItem?.folder) {
            setOvered(0)
        } else if (file[itemIndex].folder && !activeItem?.folder) {
            setOvered(1)
        } else if (!file[itemIndex].folder && activeItem?.folder) {
            setOvered(2)
        } else if (!file[itemIndex].folder && !activeItem?.folder) {
            setOvered(3)
        }
    }

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e

        if (over !== null && active.id !== over.id) {
            const isSearchActive = (value: fileType): boolean =>
                value.id === active.id
            const oldIndex: number = file.findIndex(isSearchActive)
            const isSearchOver = (value: fileType): boolean =>
                value.id === over.id
            const newIndex: number = file.findIndex(isSearchOver)

            switch (overed) {
                case 0:
                    setFile(arrayMove(file, oldIndex, newIndex))
                    return
                case 1:
                    setFile(arrayMove(file, oldIndex, newIndex))
                    return
                case 2:
                    return
                case 3:
                    const newContents: fileType[] = file[newIndex]
                        .folder as fileType[]

                    newContents.splice(0, 0, file[oldIndex] as fileType)

                    const addFile: fileType[] = file.map((item, index) =>
                        index === newIndex
                            ? {
                                  id: item.id,
                                  name: item.name,
                                  folder: newContents,
                              }
                            : item,
                    )

                    const newFile: fileType[] = addFile.filter(
                        (_, index) => index !== oldIndex,
                    )

                    setFile(newFile)
            }
        }

        setActiveItem(null)

        setOvered(null)
    }

    return <div>Enter</div>
}
