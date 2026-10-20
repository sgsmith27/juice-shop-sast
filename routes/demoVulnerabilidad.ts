
import { Router } from 'express'

const router = Router()

router.get('/demo-vulnerabilidad', (req, res) => {
  const expression = String(req.query.expression || '')

  // VULNERABLE: ejecuta entrada proporcionada por el usuario.
  const result = eval(expression)

  res.json({ result })
})

export default router
