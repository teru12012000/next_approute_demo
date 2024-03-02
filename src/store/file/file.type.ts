import { fileType } from "@/view/folderFile"

export type fileStoreType = {
    file: fileType[]
    setFile: (data: fileType[]) => void
}
