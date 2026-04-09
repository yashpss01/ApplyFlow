import app from './app.js'

import dotenv from 'dotenv'
dotenv.config()
const PORT :number=Number(process.env.SERVER_PORT) || 5000


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
