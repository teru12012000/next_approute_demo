import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
    }),
    mainContent: style({
        width: "75%",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        "@media": {
            "screen and (max-width:1100px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
        },
    }),
}

export default styles
