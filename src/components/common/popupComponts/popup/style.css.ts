import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "50%",
        backgroundColor: "white",
        height: 600,
        zIndex: 1,
    }),
    header: style({
        width: "100%",
        height: 10,
        backgroundColor: "red",
    }),
    title: style({
        width: 200,
        height: 100,
        display: "flex",
        justifyContent: "space-between",
        color: "red",
    }),
}

export default styles
