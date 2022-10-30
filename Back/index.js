import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import authRoutes from "./routes/auth.routes.js";
import cors from 'cors'

const app = express()
const PORT = config.get('serverPort')

app.use(cors())
app.use(express.json())
app.use('/api/auth',authRoutes)


const start = async () => {
    try {
        await mongoose.connect(config.get('DB_URL'))
        app.listen(PORT, () => {
            console.log('Server work on port', PORT)
        })
    } catch (e) {
    }
}
start()