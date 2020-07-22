const proxy = require('http-proxy-middlewatr');

module.exports=function (app){
    app.use(
        proxy('/api', {
            target: "http://localhost:3001/"
        })
    )
}