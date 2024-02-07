import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
    }),
    mainContent: style({
        width: "100%",
        marginTop: 50,
        textAlign: "center",
    }),
    button: style({
        backgroundColor: "silver",
        border: "1px solid silver",
        color: "white",
    }),
}

export default styles
