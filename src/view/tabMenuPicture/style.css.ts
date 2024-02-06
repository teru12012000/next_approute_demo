import { style } from "@vanilla-extract/css"

const styles = {
    containar: style({
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
    }),
    mainContant: style({
        width: "80%",
        margin: "50px auto",
    }),
    pictures: style({
        width: "90%",
        margin: "20px auto",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
    }),
    picture: style({
        margin: 10,
    }),
}

export default styles
