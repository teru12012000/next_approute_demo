import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        height: "100vh",
        width: "100vw",
    }),
    popupBackground: style({
        height: "100%",
        width: "100%",
        zIndex: 0.5,
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
    }),
}

export default styles
