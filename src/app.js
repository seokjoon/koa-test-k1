import Koa from 'koa' //const Koa = require('koa')
import path from 'path' //const path = require('path')
import dotenv from 'dotenv' //require('dotenv').config({ path: path.join(__dirname, '../.env') });
import mongoose from 'mongoose' //const mongoose = require('mongoose')
import bodyParser from 'koa-bodyparser' //const bodyParser = require('koa-bodyparser')


const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, ((process.env.NODE_ENV === 'production') ? process.env.PATH_PRODUCTION + '/.env' : './.env')) });
const { MONGO_URI, PORT, } = process.env
const port = PORT || 5000; console.log('MONGO_URI, PORT: ', MONGO_URI, PORT)
const app = new Koa();


app.listen((port), () => {
  console.log('listening to port ' + port)
})

mongoose.connect(MONGO_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB')
}).catch(e => {
  console.error(e)
})


//////// middleware BEGIN
app.use(bodyParser()) //라우터 적용 전

// app.use((ctx, next) => {
//   next()
// })
//
// app.use(async (ctx, next) => {
//   await next().then(() => { console.log('bar') })
// })
//////// middleware END


export default app //module.exports = app
