import {Router} from 'express'
import {register, login} from '../controllers/auth.js'
import {protect} from '../middlewares/auth.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/me', protect, (req, res) => {
    res.json({message: 'Acesso autorizado!',
        user: req.user
    })
})

export default router