import { pool } from '../config/db.js'

export async function getHealth(req, res) {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok')
    res.json({ ok: true, db: rows[0].ok === 1 })
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message })
  }
}
