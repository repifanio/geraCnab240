const express = require('express')
const server = require('./app')
const app = require('./app')

server.use(express.json())

app.listen(3333, () => {
    console.log('Server listen on port 3333')
})