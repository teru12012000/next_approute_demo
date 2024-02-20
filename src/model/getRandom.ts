import type { randomType } from "@/components/common/picture"

export const getRandom = async (url: string): Promise<randomType> => {
    const res = await fetch(url)
    const data = await res.json()

    return data as randomType
}
