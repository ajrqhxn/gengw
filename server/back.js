const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})



const express = require('express');
const app = express();
const api = require('./routes/index');
app.use('/api', api);

app.listen(3001, () => console.log('node js server is running'));

