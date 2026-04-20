import { landingData } from "@/lib/landingData"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import CreateDeal from "@/components/CreateDeal"
import Trust from "@/components/Trust"
import Steps from "@/components/Steps"
import Deals from "@/components/Deals"
import Reviews from "@/components/Reviews"
import CTA from "@/components/CTA"
import FadeUp from "@/components/ui/FadeUp"

export default function Page({ params }: { params: { slug: string } }) {
  const data = landingData[params.slug] || landingData.default

  return (
    <main className="text-white">
      <Header />

      <FadeUp>
        <Hero title={data.title} subtitle={data.subtitle} />
      </FadeUp>

      <FadeUp>
        <CreateDeal />
      </FadeUp>

      <FadeUp><Trust /></FadeUp>
      <FadeUp><Steps /></FadeUp>
      <FadeUp><Deals /></FadeUp>
      <FadeUp><Reviews /></FadeUp>
      <FadeUp><CTA /></FadeUp>
    </main>
  )
}