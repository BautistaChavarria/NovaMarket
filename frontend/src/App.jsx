import { useEffect, useState } from 'react'

export default function App() {
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(setHealth)
      .catch(() => setHealth({ ok: false }))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-6 shadow bg-white">
        <h1 className="text-2xl font-bold">NovaMarket</h1>
        <p className="text-sm text-gray-600">React + Vite + Tailwind</p>
      </header>

      <main className="p-6 grid gap-6">
        <div className="rounded-2xl p-6 shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">Estado del sistema</h2>
          <pre className="text-sm">{JSON.stringify(health, null, 2)}</pre>
          <p className="text-xs text-gray-500 mt-2">
            Si ves {"{"}'ok': true, 'db': true{"}"} la API y la base están OK.
          </p>
        </div>
      </main>
    </div>
  )
}
