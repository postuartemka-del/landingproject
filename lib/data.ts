import { PageData } from "./types"

export const data: Record<string, PageData> = {
  default: {
    hero: {
      title: "Безопасные сделки онлайн",
      subtitle: "Гарантируем защиту ваших средств",
    },

    deals: [
      {
        id: "1",
        title: "Разработка сайта",
        amount: "$1200",
        status: "completed",
        date: "2026-01-01",
      },
      {
        id: "2",
        title: "Покупка аккаунта",
        amount: "$300",
        status: "active",
        date: "2026-01-02",
      },
      {
        id: "3",
        title: "Дизайн лендинга",
        amount: "$850",
        status: "pending",
        date: "2026-01-03",
      },
    ],

    reviews: [
      {
        id: "1",
        name: "Алексей",
        text: "Все прошло безопасно, рекомендую!",
        rating: 5,
      },
      {
        id: "2",
        name: "Мария",
        text: "Отличный сервис, деньги пришли вовремя",
        rating: 5,
      },
    ],

    footer: {
      text: "© 2026 Все права защищены",
    },

    seo: {
      title: "Гарант сервис",
      description: "Безопасные сделки онлайн без риска",
    },
  },
}