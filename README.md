# NovaMarket — Full Starter (React + Vite + Tailwind + Express + MySQL)

Este proyecto ya viene listo para que hagas `npm install` y arranque todo.

## Requisitos
- Node.js 18+ y npm
- Acceso a MySQL (puede ser un contenedor).

## Arranque rápido
```bash
# en la carpeta raíz (donde está este README)
npm install
cp backend/.env.example backend/.env
# editar backend/.env con tu usuario/clave reales
npm run dev
```
- Frontend: http://localhost:5173
- Backend:  http://localhost:3001
- Probar API: `curl http://localhost:3001/api/health`

## Estructura
```
NovaMarket/
  backend/         # API (Express + mysql2 + dotenv + cors)
  frontend/        # UI (React + Vite + Tailwind)
  package.json     # workspaces + scripts
  .gitignore
```
