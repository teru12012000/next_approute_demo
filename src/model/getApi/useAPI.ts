import { getPictures } from "./getApi"
import useSWR from "swr"

export const useAPI = (url: string) => {
    const controller = new AbortController()
    const signal = controller.signal

    const { data } = useSWR(url, (url) => getPictures(url, signal))

    return {
        data,
        controller,
    }
}
