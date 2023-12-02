import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        display: "flex",
        width: "100vw",
        overflow: "auto",
    }),
    itemMargin: style({
        margin: "5px",
    }),
}

export default styles
