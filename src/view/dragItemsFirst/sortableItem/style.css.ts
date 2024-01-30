import { keyframes, style } from "@vanilla-extract/css"

const pop = keyframes({
    "0%": {
        transform: "translate3d(0px, 0px, 0) scale(1)",
    },
    "100%": {
        transform: "translate3d(10px, 10px, 0) scale(1.025)",
    },
})

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
}

export default styles
