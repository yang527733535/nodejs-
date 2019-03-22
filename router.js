var express = require('express')

var router =express.Router()

router.get('/',function(req,res){
  res.render('index.html')
})

router.get('/login',function(req,res){
    res.render('login.html')
  })


router.post('/login',function(req,res){
    res.render('index.html')
  })

  router.get('/register',function(req,res){
    res.render('register.html')
  })


router.post('/register',function(req,res){
    res.render('index.html')
    //1 获取表单 提交数据
    //2 操作数据库
    //3 发送响应
  })

module.exports = router