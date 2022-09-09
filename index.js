const express = require('express')

// instance of express app
const app = express()

//listen for request
//returns an instance of server
app.listen(3000)

app.get('/',(req, res)=>{
    //automatically sets the header and status code
    // res.send('<p>Home Page</p>')
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/about',(req, res)=>{
    //automatically sets the header and status code
    // res.send('<p>Home Page</p>')
    res.sendFile('./views/about.html', {root: __dirname})
})
//redirect
app.get('/about-us',(req, res)=>{
    res.redirect('/about')
})
//404 using middleware
app.use((req, res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})