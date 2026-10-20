
import { Router } from 'express'

const router = Router()

router.get('/demo-vulnerabilidad', (req, res) => {
  const expression = String(req.query.expression || '')

  // SEGURO: tratamos la entrada como texto, sin ejecutarla.
  const result = expression

  res.json({ result })
})

export default router
