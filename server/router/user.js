const express = require('express')
var app = express()
var router = express.Router()

router.get('/1',(req,res, next) =>{
    console.log("1")
    next()
})

router.get('/2',(req,res, next) =>{
    console.log("2")
    next()
})

router.get('/3',(req,res,next) =>{
    console.log("3")
    next()
})

router.get('/*',(req,res,next) => {
    // return(
    console.log(req.path)
    console.log(req.query.name)
    res.json({
        user:"res = " + req.query.user
    });
})

router.use(function(err, req, res,next){
    console.error(err.stack)

})

module.exports = router