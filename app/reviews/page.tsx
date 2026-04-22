import Reviews from "@/components/Reviews"

export default function ReviewsPage() {
  const mockReviews = [
    {
      name: "Алексей",
      text: "Все прошло безопасно, деньги получил.",
      rating: 5,
    },
    {
      name: "Мария",
      text: "Удобный сервис, буду пользоваться еще.",
      rating: 5,
    },
    {
      name: "Иван",
      text: "Сделка прошла без проблем.",
      rating: 4,
    },
  ]

  return <Reviews reviews={mockReviews} />
}