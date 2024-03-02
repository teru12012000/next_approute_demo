export type fileType = {
    id: string
    name: string
    folder?: fileType[]
}

export type pickType = "folder" | "file"

export type overType = 0 | 1 | 2 | 3 //フォルダフォルダ、ファイルファイル、フォルダファイル、ファイルフォルダ
