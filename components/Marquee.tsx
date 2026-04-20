"use client"

import Link from "next/link"

const items = [
  { name: "Сайты", slug: "sites" },
  { name: "Домены", slug: "domains" },
  { name: "Паблики в Instagram", slug: "instagram" },
  { name: "Каналы в Telegram", slug: "telegram" },
  { name: "Группы ВКонтакте", slug: "vk" },
  { name: "Крипто-сделки", slug: "crypto" },
  { name: "Трафик", slug: "traffic" },
  { name: "Приложения", slug: "apps" },
  { name: "Маркетплейсы", slug: "market" },
  { name: "YouTube-каналы", slug: "youtube" },
  { name: "Telegram-боты", slug: "bots" },
]

export default function Marquee() {
  return (
    <section className="bg-[#F5F7FA] py-8 overflow-hidden">

      <div className="relative space-y-4">

        {/* FADE LEFT */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#F5F7FA] to-transparent z-10" />

        {/* FADE RIGHT */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#F5F7FA] to-transparent z-10" />

        {/* ВЕРХ */}
        <div className="marquee group">
          <div className="marquee-track">
            {[...items, ...items].map((item, i) => (
              <Link
                key={`top-${i}`}
                href={`/${item.slug}`}
                className="marquee-item"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* НИЗ */}
        <div className="marquee reverse group">
          <div className="marquee-track">
            {[...items, ...items].map((item, i) => (
              <Link
                key={`bottom-${i}`}
                href={`/${item.slug}`}
                className="marquee-item"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}