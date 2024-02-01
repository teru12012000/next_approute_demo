import { style } from "@vanilla-extract/css"

const styles = {
    box: style({
        width: 360,
        height: 90,
        border: "1px solid black",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
    }),
    underLineBox: style({
        width: 360,
        height: 15,
        display: "flex",
        alignItems: "center",
    }),
    underLine: style({
        width: 360,
        border: "1px solid blue",
    }),
    font: style({
        fontSize: 32,
        marginRight: 20,
    }),
}

export default styles
