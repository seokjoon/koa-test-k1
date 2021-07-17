const Koa = require('koa')

const app = new Koa();

app.listen(3001, () => {
  console.log('listening to port 3001')
})

app.use((ctx, next) => {
  console.log(ctx.url)
  ctx.body = 'foo'
  next()
})

app.use(async (ctx, next) => {
  ctx.body = ctx.body + '\nbar'
  // next().then(() => { console.log('bar') })
  await next().then(() => { console.log('bar') })
})

app.use((ctx, next) => {
  setTimeout(() => {
    console.log('bee')
  }, 1000)
  console.log('fee')
  next()
})

module.exports = app