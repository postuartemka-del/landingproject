'use server'

import {
  SeoData,
  updateSeo,
  Deal,
  addDeal,
  deleteDeal,
  Review,
  addReview,
  updateReview,
  deleteReview,
  FooterData,
  updateFooter,
  AnalyticsData,
  updateAnalytics,
} from './data'

export async function saveSeo(data: SeoData) {
  await updateSeo(data)
  return { success: true }
}

export async function saveDeal(data: Omit<Deal, 'id'>) {
  const result = await addDeal(data)
  return { success: true, deal: result }
}

export async function removeDeal(id: string) {
  await deleteDeal(id)
  return { success: true }
}

export async function saveReview(data: Omit<Review, 'id'>) {
  const result = await addReview(data)
  return { success: true, review: result }
}

export async function editReview(id: string, data: Omit<Review, 'id'>) {
  const result = await updateReview(id, data)
  return { success: true, review: result }
}

export async function removeReview(id: string) {
  await deleteReview(id)
  return { success: true }
}

export async function saveFooter(data: FooterData) {
  await updateFooter(data)
  return { success: true }
}

export async function saveAnalytics(data: AnalyticsData) {
  await updateAnalytics(data)
  return { success: true }
}