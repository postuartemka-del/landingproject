import { data } from "@/lib/data"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Deals from "@/components/Deals"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"
import FadeUp from "@/components/ui/FadeUp"

import Marquee from "@/components/Marquee"
import LiveReviews from "@/components/LiveReviews"
import SafeDeal from "@/components/SafeDeal"
import HowItWorks from "@/components/HowItWorks"
import CTA from "@/components/CTA"
import SeoText from "@/components/SeoText"

import { ShieldCheck, Percent, FileText, Scale } from "lucide-react"
import { notFound } from "next/navigation"

// SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  const blockedRoutes = ["reviews", "create", "success", "admin"]

  if (blockedRoutes.includes(slug)) {
    return {}
  }

  const page = data[slug] || data.default

  return {
    title: page.seo.title,
    description: page.seo.description,
  }
}

export default function Page({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  // ❗ блокируем системные страницы
  const blockedRoutes = ["reviews", "create", "success", "admin"]

  if (blockedRoutes.includes(slug)) {
    notFound()
  }

  const page = data[slug] || data.default

  return (
    <main className="bg-[#F5F7FA] text-gray-900">
      <Header />

      <FadeUp>
        <Hero
          title={page.hero.title || ""}
          subtitle={page.hero.subtitle || ""}
        />
      </FadeUp>

      <FadeUp>
        <section className="max-w-6xl mx-auto px-4 -mt-12 mb-20">
          <div className="grid md:grid-cols-4 gap-6">

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <Percent size={20} />
              <p>Комиссия 1%</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck size={20} />
              <p>Безопасность 100%</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <FileText size={20} />
              <p>Фиксация условий</p>
            </div>

            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <Scale size={20} />
              <p>Решение споров</p>
            </div>

          </div>
        </section>
      </FadeUp>

      <FadeUp><Marquee /></FadeUp>
      <FadeUp><LiveReviews /></FadeUp>
      <FadeUp><SafeDeal /></FadeUp>
      <FadeUp><Deals deals={page.deals || []} /></FadeUp>
      <FadeUp><HowItWorks /></FadeUp>
      <FadeUp><Reviews reviews={page.reviews || []} /></FadeUp>
      <FadeUp><CTA /></FadeUp>
      <FadeUp><SeoText /></FadeUp>

      <Footer text={page.footer?.text || ""} />
    </main>
  )
}