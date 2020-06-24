const express = require('express')
const BoletoController = require('./controller/BoletoController')

const app = express()

app.get('/header-file', BoletoController.createCnab240)

module.exports = app;