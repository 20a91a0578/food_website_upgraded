// packages need to install
// after creating File
// npm init
// npm install express
// npm install cors
// npm install monk

const  express=require('express')
const server=express()
const cors=require('cors')
const monk=require('monk')
server.use(cors())
server.use(express.json())
const db=monk("mongodb+srv://20a91a0578:mongodb1818@cluster0.matux8t.mongodb.net/Trail");
db.then(()=>{console.log('database connected......')})
let data=db.get("Data");
server.get('/',(req,res)=>{
    data.find({}).then((result)=>{
        res.send(result)
    })
})
server.post('/postdata',(req,res)=>{
    const body=req.body;
    data.insert(body).then((resu)=>{console.log(resu)})
})
server.post('/query',(req,res)=>{
    const body=req.body;
    data.insert(body).then((resu)=>{console.log(resu)})
})
server.post('/order',(req,res)=>{
    const body=req.body;
    data.insert(body).then((resu)=>{console.log(resu)})
})
server.get('/getorders/:id',(req,res)=>{
    const dat=data.find({order:'yes',username:req.params.id}).then((resu)=>{
        res.send(resu)
    })
})
server.listen(8003,()=>{
    console.log('server running....')
})