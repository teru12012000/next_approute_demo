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
        backgroundColor: "gray",
        height: 40,
        borderRadius: 5,
        border: "1px solid gray",
        color: "white",
        boxShadow: "0 1 0 rgba(0,0,0,0.2)",
    }),
}

export default styles
