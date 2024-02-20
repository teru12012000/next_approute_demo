import type { pictureType } from "@/components/common/picture"

export const getPromisePicture = async (url: string[]) => {
    const response = await Promise.all(
        url.map(async (item: string) => {
            const res = await fetch(item)

            const data = await res.json()

            return data as pictureType[]
        }),
    )

    return response
}
