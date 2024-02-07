"use client"

import OnePopupButtonView from "./view"

interface props {
    onClick: () => void
    value: string
    background?: string
}

const OnePopupButton = (props: props) => {
    return <OnePopupButtonView {...props} />
}

export default OnePopupButton
