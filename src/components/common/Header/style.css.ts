import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        width: "100vw",
        height: "50px",
    }),
    buttonStyle: style({
        height: "30px",
        border: "1px solid white",
        backgroundColor: "white",
        marginLeft: "5px",
        color: "black",
    }),
}

export default styles
