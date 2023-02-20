const express=require('express')

const {connection}=require('./db')
const {userRouter}=require('./routes/users.routes')
const {postRouter}=require('./routes/post.routes')

const {authentication}=require('./middlewares/authentication')

require('dotenv').config()

const app=express()
app.use(express.json())


app.get('/', (req,res) =>{
    res.send('Welcome to Home Page')
})

app.use('/users', userRouter)
app.use(authentication)
app.use('/posts', postRouter)

app.listen(process.env.port, async() =>{
    try {
        await connection
        console.log('Connected to DB')
    } catch (err) {
        console.log(err.message)
    }
    console.log(`Server is running at port ${process.env.port}`);
})

