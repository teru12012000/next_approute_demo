import type { pictureType } from "@/components/common/picture"

export const getPicture = async (url: string): Promise<pictureType[]> => {
    const res = await fetch(url)
    const data = await res.json()

    return data as pictureType[]
}

export const getPictures = async (
    url: string,
    signal: AbortSignal,
): Promise<pictureType[]> => {
    const res = await fetch(url, { signal })
    const data = await res.json()

    return data as pictureType[]
}
