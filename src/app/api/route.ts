export function GET(request: Request) {
    const random: number = Math.floor(Math.random() * 20) + 1

    console.log(random)

    return Response.json({ id: String(random) })
}
