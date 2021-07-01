const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOverride = require('method-override')

// Criando o servidor
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk') 



nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})


// Colocando ele online
server.listen('5001', function(){
    console.log('Server is running')
})