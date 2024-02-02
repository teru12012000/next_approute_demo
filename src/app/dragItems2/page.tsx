import dynamic from "next/dynamic"

const DndContextWapper = dynamic(
    async () => {
        return await import("@/view/dragItemsSecound")
    },
    { ssr: false },
)

const DragItem2 = () => {
    return <DndContextWapper />
}

export default DragItem2
