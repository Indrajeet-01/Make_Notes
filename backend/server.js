import express from 'express'
import cors from 'cors'

import db from './database.js'
import notesRoutes from './routes/notes.js'


const PORT = 4000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/notes', notesRoutes)

db.connect((err) => {
    if(err) {
        console.log('error in connecting to database', err)
    } else {
        console.log('connected to database')
    }
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})