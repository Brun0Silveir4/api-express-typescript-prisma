import {Router} from 'express'
import {register, login} from '../controllers/auth.js'
import {protect} from '../middlewares/auth.js'
import { prisma } from '../lib/prisma.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/me', protect, (req, res) => {
    res.json({message: 'Acesso autorizado!',
        user: req.user
    })
})

router.get('/perfil', protect, async (req, res) => {
  const userId = req.user?.id
  
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })

  res.json(user)
})

export default router