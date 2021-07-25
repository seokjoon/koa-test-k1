//const path = require('path')
import path from 'path'
//require('dotenv').config({ path: path.join(__dirname, '../.env') });
const __dirname = path.resolve()
import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, ((process.env.NODE_ENV === 'production') ? process.env.PATH_PRODUCTION + '/.env' : './.env')) });


//const Koa = require('koa')
import Koa from 'koa'
//const bodyParser = require('koa-bodyparser')
import bodyParser from 'koa-bodyparser'
//const mongoose = require('mongoose')
import mongoose from 'mongoose'


const { MONGO_URI, PORT, } = process.env
const port = PORT || 5000; console.log('MONGO_URI, PORT: ', MONGO_URI, PORT)


mongoose.connect(MONGO_URI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB')
}).catch(e => {
  console.error(e)
})


const app = new Koa();
app.listen((port), () => {
  console.log('listening to port ' + port)
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


//module.exports = app
export default app