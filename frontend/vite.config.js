// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cambiá esto cuando tengas dominio real (https)
const PROD_ORIGIN = 'https://TU_DOMINIO'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // En caso de servir frontend bajo subcarpeta en producción, ajustá "base"
  // base: mode === 'production' ? '/' : '/',
  server: {
    port: 5173,
    open: true,
    // Proxy solo en desarrollo: evita CORS hablando con el backend local
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  // Ejemplo de variables por modo (opcional)
  define: {
    __API_BASE__: JSON.stringify(
      mode === 'production' ? `${PROD_ORIGIN}/api` : '/api'
    )
  }
}))
