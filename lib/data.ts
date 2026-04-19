// ===== TYPES =====

export type SeoData = {
  title: string
  description: string
  keywords: string
}

export type Deal = {
  id: string
  title: string
  amount: string
  status: 'active' | 'completed'
  date: string
}

export type Review = {
  id: string
  name: string
  role: string
  avatar: string
  text: string
  rating: number
}

export type FooterData = {
  companyName: string
  description: string
  email: string
  phone: string
  copyright: string
  socialLinks: {
    name: string
    url: string
  }[]
}

export type AnalyticsData = {
  googleId: string
  metrikaId: string
}

export type DataType = {
  seo: SeoData
  hero: {
    title: string
    subtitle: string
  }
  deals: Deal[]
  reviews: Review[]
  footer: FooterData
  analytics: AnalyticsData
}

// ===== DATA =====

export const data: DataType = {
  seo: {
    title: "SecureDeal — Безопасные сделки",
    description: "Безопасные сделки с комиссией всего 1% без риска",
    keywords: "гарант сделок, безопасная сделка, авито гарант",
  },

  hero: {
    title: "Безопасные сделки с гарантией всего за 1%",
    subtitle:
      "Гарант полностью контролирует процесс сделки. Все условия фиксируются заранее и не могут быть изменены.",
  },

  deals: [
    {
      id: "1",
      title: "Продажа iPhone 15",
      amount: "120 000 ₽",
      status: "active",
      date: "2026-04-01",
    },
    {
      id: "2",
      title: "Продажа MacBook",
      amount: "55 000 ₽",
      status: "completed",
      date: "2026-03-28",
    },
  ],

  reviews: [
    {
      id: "1",
      name: "Алексей",
      role: "Покупатель",
      avatar: "https://i.pravatar.cc/100?img=1",
      text: "Проводил сделку на 180 000 ₽. Всё прошло идеально.",
      rating: 5,
    },
    {
      id: "2",
      name: "Марина",
      role: "Продавец",
      avatar: "https://i.pravatar.cc/100?img=2",
      text: "Гарант реально спас от мошенника.",
      rating: 5,
    },
  ],

  footer: {
    companyName: "SecureDeal",
    description:
      "Сервис безопасных сделок с минимальной комиссией и полной защитой сторон.",
    email: "support@securedeal.ru",
    phone: "+7 (999) 999-99-99",
    copyright: "© 2026 SecureDeal",
    socialLinks: [
      {
        name: "Telegram",
        url: "https://t.me/yourlink",
      },
    ],
  },

  analytics: {
    googleId: "",
    metrikaId: "",
  },
}