export function GET(request: Request) {
    const random: number = Math.floor(Math.random() * 20) + 1

    return Response.json({ id: String(random) })
}
