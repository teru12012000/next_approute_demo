import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        width: "100%",
        height: 100,
        borderBottom: "1px solid black",
        display: "flex",
        justifyContent: "center",
    }),
    buttons: style({
        height: 100,
        width: 500,
        display: "flex",
        justifyContent: "space-around",
    }),
    button: style({
        height: 100,
        width: 100,
        border: "1px solid black",
        fontSize: 24,
    }),
}

export default styles
