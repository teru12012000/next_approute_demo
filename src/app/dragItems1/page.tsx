import dynamic from "next/dynamic"

const DndContextWapper = dynamic(
    async () => {
        return await import("@/view/dragItemsFirst")
    },
    { ssr: false },
)

const DragItems1 = () => {
    return <DndContextWapper />
}

export default DragItems1
