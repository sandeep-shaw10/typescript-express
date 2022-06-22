import express, { Request, Response, json, NextFunction } from 'express'



const port = 3000
const app = express()



// Add Middleware Function
app.use(logger)

app.get('/', (req: Request, res: Response) => res.json('Hello Qwerty'))


app.listen(port, () => {
  console.log(`╭─ Running on port: ${port}`)
})


//Middleware Function
function logger(req: Request, res: Response, next: NextFunction){
    const today = new Date(Date.now());
    console.log(`├── [${today.toISOString()}] ROUTE[${req.originalUrl}]`)
    next()
}
