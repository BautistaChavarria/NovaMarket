import { useEffect, useState } from "react";

export default function Health() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setHealth({ ok: false }));
  }, []);

  return (
    <div className="rounded-2xl p-6 shadow bg-white">
      <h2 className="text-xl font-semibold mb-2">Estado del sistema</h2>
      <pre className="text-sm">{JSON.stringify(health, null, 2)}</pre>
      <p className="text-xs text-gray-500 mt-2">
        Si ves {"{"}'ok': true, 'db': true{"}"} la API y la base están OK.
      </p>
    </div>
  );
}
