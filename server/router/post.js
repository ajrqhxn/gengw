const express = require('express')
const app = express()
const route = express.Router()

route.post('/*',(req,res,next) => {

    console.log(req)
    console.log("user : " + req.body.params.user)
    console.log("name : " + req.body.params.name)
    res.send("post user : " + req.body.params.user + " name : " + req.body.params.name)
})

module.exports = route