const path = require('path')
const express = require('express')
const publicDirPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const hbs = require('hbs')
const cpanelRoute = require('./routes/cpanel')
const hcmApiRoute = require('./routes/hcmapi')

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
app.use(cpanelRoute)
app.use(hcmApiRoute)
app.use(express.static(publicDirPath))

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server running on port: ${port}`)
})