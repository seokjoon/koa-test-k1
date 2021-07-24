const Koa = require('koa')
const bodyParser = require('koa-bodyparser')


const app = new Koa();

app.listen(3001, () => {
  console.log('listening to port 3001')
})


//////// middleware BEGIN
app.use(bodyParser()) //라우터 적용 전

app.use((ctx, next) => {
  next()
})

app.use(async (ctx, next) => {
  await next().then(() => { console.log('bar') })
})

app.use((ctx, next) => {
  setTimeout(() => {
    console.log('bee')
  }, 1000)
  console.log('fee')
  next()
})
//////// middleware END


module.exports = app