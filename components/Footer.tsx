import { data } from '@/lib/data'
import { Shield, Mail, Phone } from 'lucide-react'

export function Footer() {
  const footerData = data.footer

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-green-400" />
          <span className="text-lg font-bold text-white">
            {footerData.companyName}
          </span>
        </div>

        <p className="text-gray-400 mb-6">
          {footerData.description}
        </p>

        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {footerData.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            {footerData.phone}
          </div>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          {footerData.copyright}
        </div>

      </div>
    </footer>
  )
}