const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const routes = require('./routes')
const newroutes = require('./newroutes')


//npm run start

const app = express()
app.set('port',process.env.PORT || 9000)
const dbOptions = {
    host:'localhost',
    port: 3306,
    user: 'root',
    password:'',
    database:'library'
}
//middlewares==============================
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())

//router =================================
app.get('/',(req,res)=>{
    res.send('welcome to my API')
})

app.use('/api',routes)
app.use('/newapi',newroutes)
//server running=========================

app.listen(app.get('port'), ()=>{
    console.log("server running on port",app.get('port'))
})