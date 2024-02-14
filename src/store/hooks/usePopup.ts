import { popupState, popupType } from "@/shared/types/popupType"
import { create } from "zustand"

const initialize: popupType = {
    flag: false,
}

export const usePopup = create<popupState>((set) => ({
    value: initialize,
    setValue: (value) => set(() => ({ value: value })),
}))
