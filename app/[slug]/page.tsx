import { data } from '@/lib/data'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Deals } from '@/components/Deals'
import { Reviews } from '@/components/Reviews'
import { Footer } from '@/components/Footer'
import { HowItWorks } from '@/components/HowItWorks'

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Hero data={data.hero} />

      <div className="space-y-16">
        <Features />
        <HowItWorks />
        <Deals deals={data.deals} />
        <Reviews reviews={data.reviews || []} />
      </div>

      <Footer />

    </main>
  )
}