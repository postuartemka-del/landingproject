export default function Footer({ text }: { text: string }) {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        {/* основной текст */}
        <p className="text-gray-400 text-sm mb-4">
          {text}
        </p>

        {/* доп строка (для “дорогого” вида) */}
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} SecureDeal. Все права защищены.
        </p>

      </div>
    </footer>
  )
}