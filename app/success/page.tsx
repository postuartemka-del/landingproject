export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-2">
          Сделка создана
        </h1>
        <p className="text-gray-600">
          Мы свяжемся с вами в ближайшее время
        </p>
      </div>
    </div>
  )
}

useEffect(() => {
  const saved = localStorage.getItem("draft")
  if (saved) {
    const data = JSON.parse(saved)
    setTitle(data.title || "")
    setAmount(data.amount || "")
  }
}, [])