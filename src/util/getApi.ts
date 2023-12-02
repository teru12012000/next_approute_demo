import { pictureType } from "@/shared/types/apiType"

export const getPicture = async (url: string): Promise<pictureType[]> => {
    const res = await fetch(url)
    const data = await res.json()

    return data as pictureType[]
}
