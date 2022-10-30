import Router from 'express'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {check, validationResult} from 'express-validator'
import config from "config";
import authMiddleware from "../middleware/auth.middleware.js";

const router = new Router()

router.post('/registration',
    [
        check('email', 'Uncorrected email').isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12}),
    ],
    async (req, res) => {
        try {

            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Uncorrected request'})
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `User with  email ${email} is exist`})
            }

            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({email, password: hashPassword})
            await user.save()
            return res.json({message: 'User was created'})
        } catch (e) {
            console.log(e)
            res.json({message: 'Server error'})
        }
    })

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(404).json({message: `User not found`})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)

        if (!isPassValid) {
            return res.status(404).json({message: `Invalid password`})
        }

        const token = jwt.sign({id: user.id},
            config.get("secretKey"), {expiresIn: '1h'})

        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                diskSpace: user.diskSpace,
                usedSpace: user.usedSpace,
                avatar: user.avatar,
            }
        })
    } catch (e) {
        console.log(e)
        res.json({message: 'Server error'})
    }
})

router.get('/isAuth', authMiddleware, async (req, res) => {
    try {
        const {_id,email,diskSpace,usedSpace} = await User.findById(req.user.id)
        const token = jwt.sign({id: _id},
            config.get("secretKey"), {expiresIn: '1h'})

        return res.json({
            token,
            user: {
                id: _id,
                email: email,
                diskSpace: diskSpace,
                usedSpace: usedSpace,
            }
        })
    } catch (e) {
        console.log(e)
        res.json({message: 'Server error'})
    }
})

export default router