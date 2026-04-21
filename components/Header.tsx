export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <div className="font-bold text-lg text-gray-900">
          SafeDeal
        </div>

        <a href="#cta">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
            Начать
          </button>
        </a>

      </div>
    </header>
  )
}