'use client'

import { Settings, FileText, ShoppingCart, MessageSquare, Layout, BarChart3 } from 'lucide-react'
import Link from 'next/link'

type Section = 'seo' | 'deals' | 'reviews' | 'footer' | 'analytics'

const sections: { id: Section; label: string; icon: typeof FileText }[] = [
  { id: 'seo', label: 'SEO', icon: FileText },
  { id: 'deals', label: 'Сделки', icon: ShoppingCart },
  { id: 'reviews', label: 'Отзывы', icon: MessageSquare },
  { id: 'footer', label: 'Footer', icon: Layout },
  { id: 'analytics', label: 'Аналитика', icon: BarChart3 },
]

export function AdminSidebar({
  activeSection,
  onSectionChange,
}: {
  activeSection: Section
  onSectionChange: (s: Section) => void
}) {
  return (
    <aside className="w-64 min-h-screen glass-strong border-r border-white/[0.05] flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/[0.05]">
        <Link href="/main" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-main flex items-center justify-center">
            <Settings className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-sm">Admin Panel</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onSectionChange(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
              activeSection === id
                ? 'bg-accent/10 text-accent-light border border-accent/20'
                : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Back to site */}
      <div className="p-4 border-t border-white/[0.05]">
        <Link
          href="/main"
          className="flex items-center gap-2 px-4 py-3 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/[0.05] transition-all"
        >
          ← Назад на сайт
        </Link>
      </div>
    </aside>
  )
}