import { style } from "@vanilla-extract/css"

const styles = {
    box: style({
        width: 150,
        height: 150,
        border: "1px solid black",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
    }),
    underLineBox: style({
        width: 15,
        height: 200,
        display: "flex",
        alignItems: "center",
    }),
    underLine: style({
        width: 360,
        border: "1px solid blue",
    }),
    font: style({
        fontSize: 20,
        marginRight: 20,
    }),
}

export default styles
