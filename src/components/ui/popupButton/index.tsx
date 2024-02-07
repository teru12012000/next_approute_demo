import PopupButtonView from "./view"

interface props {
    onClick: () => void
    value: string
    background?: string
}

const PopupButton = (props: props) => {
    return <PopupButtonView {...props} />
}

export default PopupButton
