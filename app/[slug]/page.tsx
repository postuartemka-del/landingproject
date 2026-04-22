import { data } from "@/lib/data"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Deals from "@/components/Deals"
import Reviews from "@/components/Reviews"
import Footer from "@/components/Footer"
import FadeUp from "@/components/ui/FadeUp"
import Steps from "@/components/Steps"

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
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const blockedRoutes = ["reviews", "create", "success", "admin"]

  if (blockedRoutes.includes(slug)) {
    notFound {}
  }

  const page = data[slug] || data.default

  return {
    title: page.seo.title,
    description: page.seo.description,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // ❗ блокируем системные страницы
  const blockedRoutes = ["reviews", "create", "success", "admin"]

  if (blockedRoutes.includes(slug)) {
    return null
  }

  const page = data[slug] || data.default

  return (
    <main className="bg-[#F5F7FA] text-gray-900">
      <Header />

      {/* HERO */}
      <FadeUp>
        <Hero
          title={page.hero.title || ""}
          subtitle={page.hero.subtitle || ""}
        />
      </FadeUp>

      <FadeUp>
        <section className="max-w-6xl mx-auto px-4 -mt-12 mb-20">
          <div className="grid md:grid-cols-4 gap-6">

            {/* 1 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Percent size={20} />
              </div>

              <p className="text-sm text-gray-500 mb-1">Комиссия</p>
              <p className="font-semibold text-gray-900 text-lg">
                Всего <span className="text-green-500">1%</span> от сделки
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Дешевле, чем на Авито
              </p>
            </div>

            {/* 2 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <ShieldCheck size={20} />
              </div>

              <p className="text-sm text-gray-500 mb-1">Безопасность</p>
              <p className="font-semibold text-gray-900 text-lg">
                Защита сделки на <span className="text-green-500">100%</span>
              </p>
            </div>

            {/* 3 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <FileText size={20} />
              </div>

              <p className="text-sm text-gray-500 mb-1">Условия</p>
              <p className="font-semibold text-gray-900 text-lg">
                Всё фиксируется заранее
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Не меняется до завершения сделки
              </p>
            </div>

            {/* 4 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <Scale size={20} />
              </div>

              <p className="text-sm text-gray-500 mb-1">Споры</p>
              <p className="font-semibold text-gray-900 text-lg">
                Объективная оценка
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Без отписок и шаблонов
              </p>
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