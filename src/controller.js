const req = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    body: ctx.request.body,
  }
}


exports.create = ctx => {
  req(ctx)
}

exports.delete = ctx => {

}

exports.req = ctx => req(ctx)

exports.read = ctx => {

}

exports.reads = ctx => {

}

exports.update = ctx => {

}
