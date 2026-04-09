import express from 'express'
import type {Request,Response} from 'express'

const app = express()
app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.send("ApplyFlow's server")
})
app.get('/health',(req:Request,res:Response)=>{
    res.send("API responding")
})



export default app;



