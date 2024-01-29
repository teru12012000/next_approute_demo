import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
    }),
    mainContent: style({
        display: "flex",
        justifyContent: "center",
    }),
}

export default styles
