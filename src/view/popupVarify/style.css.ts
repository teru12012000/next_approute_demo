import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 0,
        backgroundColor: "white",
    }),
    mainContent: style({
        width: "100%",
        height: 100,
        textAlign: "center",
        backgroundColor: "white",
        marginTop: 50,
    }),
    button: style({
        backgroundColor: "silver",
        border: "1px solid silver",
        color: "white",
    }),
}

export default styles
