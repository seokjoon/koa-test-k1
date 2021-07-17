const Koa = require('koa')

const app = new Koa();

app.use(ctx => {
  ctx.body = 'foo'
})

app.listen(3001, () => {
  console.log('listening to port 3001')
})