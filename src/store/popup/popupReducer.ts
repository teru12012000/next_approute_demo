import { popupAction, popupState } from "@/shared/types/popupReducer"

export const popupReducer = (state: popupState, action: popupAction) => {
    switch (action.popupType) {
        case "nomal":
            return {
                state: action,
            }
        case "oneButton":
            if (action.buttonValue1 && action.onClick1) {
                return {
                    state: action,
                }
            } else {
                return {
                    state: null,
                    errorMessage: "要素が足りません",
                }
            }
        default:
            return {
                state: null,
                errorMessage: "タイプが違います",
            }
    }
}
