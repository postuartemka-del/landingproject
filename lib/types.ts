export type Deal = {
  id: string
  title?: string
  amount?: string
  status: 'active' | 'pending' | 'completed'
  date: string
}

export type Review = {
  id: string
  name?: string
  text?: string
  rating?: number
}

export type FooterData = {
  text?: string
}

export type HeroData = {
  title?: string
  subtitle?: string
}

export type SeoData = {
  title?: string
  description?: string
}

export type PageData = {
  hero: HeroData
  deals: Deal[]
  reviews: Review[]
  footer: FooterData
  seo: SeoData
}