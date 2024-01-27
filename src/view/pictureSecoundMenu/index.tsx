"use client"

import { getPromisePicture } from "@/model/promisePicture"
import { apiUrl } from "@/shared/data/api/apiUrl"
import useSWR from "swr"
import PictureSecoundMenuView from "./view"

const PictureSecoundMenu = () => {
    const { data, isLoading, error } = useSWR(apiUrl, getPromisePicture)

    return <PictureSecoundMenuView data={data} />
}

export default PictureSecoundMenu
