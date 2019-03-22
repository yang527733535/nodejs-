var express =require('express')
var path =require('path')
var app =express()
var router = require('./router')
var bodyParser = require('body-parser')

app.use('/public/',express.static(path.join(__dirname,'./public')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html', require('express-art-template'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//把路由挂载到app中
app.use(router)

app.listen(3001,function(){
    console.log('running')
})