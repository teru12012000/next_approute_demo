import { fileData, fileType } from "@/view/folderFile"
import { create } from "zustand"
import { fileStoreType } from "./file.type"

export const useFile = create<fileStoreType>((set) => ({
    file: fileData,
    setFile: (file: fileType[]) => set({ file: file }),
}))
