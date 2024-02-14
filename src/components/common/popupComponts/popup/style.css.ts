import { style } from "@vanilla-extract/css"

const styles = {
    popupBackground: style({
        height: "100vh",
        width: "100vw",
        zIndex: 2,
        backgroundColor: "rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
    }),
    container: style({
        width: "50%",
        backgroundColor: "white",
        height: 600,
        zIndex: 1,
    }),
    title: style({
        width: 200,
        height: 100,
        display: "flex",
        justifyContent: "space-between",
    }),
}

export default styles
