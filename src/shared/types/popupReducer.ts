export type popupType = "nomal" | "oneButton"

export type popupAction = {
    popupType: popupType
    title: string
    onClick1?: () => void
    buttonValue1?: string
    color1?: string
}

export type popupState = {
    state: popupAction | null
    errorMessage?: string
}
