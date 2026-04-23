import { NextResponse } from "next/server"

type Review = {
  name: string
  text: string
  rating: number
  date: string
}

// ❗ важно: выносим в глобальную область
let reviews: Review[] = [
  {
    name: "Алексей",
    text: "Все прошло безопасно, деньги получил.",
    rating: 5,
    date: new Date().toISOString(),
  },
]

// GET
export async function GET() {
  return NextResponse.json(reviews)
}

// POST
export async function POST(req: Request) {
  const body = await req.json()

  const newReview: Review = {
    name: body.name || "Пользователь",
    text: body.text || "",
    rating: body.rating || 5,
    date: new Date().toISOString(),
  }

  reviews.unshift(newReview)

  return NextResponse.json({ success: true })
}