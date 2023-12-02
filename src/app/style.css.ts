import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
    }),
    mainContent: style({
        display: "flex",
    }),
}

export default styles
