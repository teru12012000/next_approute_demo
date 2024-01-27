import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
    }),
    itemMargin: style({
        margin: "10px",
    }),
    imgBox: style({
        display: "flex",
        width: "100vw",
        overflow: "auto",
    }),
}

export default styles
