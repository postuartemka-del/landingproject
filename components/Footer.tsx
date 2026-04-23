export default function Footer({ text }: { text: string }) {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <p className="text-gray-400 text-sm mb-4">
          {text}
        </p>

        <p className="text-gray-600 text-xs tracking-wide">
          © {new Date().getFullYear()} SafeDeal. All rights reserved.
        </p>

      </div>
    </footer>
  )
}