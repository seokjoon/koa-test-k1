require('dotenv').config()
const { MONGO_URI, PORT, } = process.env
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')


const port = PORT || 5000


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
//
// app.use((ctx, next) => {
//   setTimeout(() => {
//     console.log('bee')
//   }, 1000)
//   console.log('fee')
//   next()
// })
//////// middleware END


module.exports = app