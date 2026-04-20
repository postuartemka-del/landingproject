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

// SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
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
  const page = data[slug] || data.default

  return (
    <main className="bg-[#F5F7FA] text-gray-900">
      <Header />

      {/* HERO */}
      <FadeUp>
        <Hero
          title={page.hero.title}
          subtitle={page.hero.subtitle}
        />
      </FadeUp>

      {/* WHY TRUST */}
      <FadeUp>
        <Steps />
      </FadeUp>

      {/* БЕГУЩАЯ СТРОКА */}
      <FadeUp>
        <Marquee />
      </FadeUp>

      {/* МАЛЕНЬКИЕ ОТЗЫВЫ */}
      <FadeUp>
        <LiveReviews />
      </FadeUp>

      {/* БЕЗОПАСНОСТЬ */}
      <FadeUp>
        <SafeDeal />
      </FadeUp>

      {/* СДЕЛКИ */}
      <FadeUp>
        <Deals deals={page.deals || []} />
      </FadeUp>

      {/* КАК ЭТО РАБОТАЕТ */}
      <FadeUp>
        <HowItWorks />
      </FadeUp>

      {/* БОЛЬШИЕ ОТЗЫВЫ */}
      <FadeUp>
        <Reviews reviews={page.reviews || []} />
      </FadeUp>

      {/* CTA */}
      <FadeUp>
        <CTA />
      </FadeUp>

      {/* SEO ТЕКСТ */}
      <FadeUp>
        <SeoText />
      </FadeUp>

      {/* FOOTER */}
      <Footer text={page.footer?.text || ""} />
    </main>
  )
}