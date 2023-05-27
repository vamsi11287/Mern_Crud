const express = require("express")
const router = require("./routes/router")
const cors = require('cors')

const app = express()
require("./Db/connection")

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.send("data sended")
})

app.use('/api/names',router)





app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})