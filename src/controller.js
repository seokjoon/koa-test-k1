const reqs = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    body: ctx.request.body,
  }
}


exports.create = ctx => {
  reqs(ctx)
}

exports.delete = ctx => {


}

exports.reqs = ctx => reqs(ctx)

exports.read = ctx => {

}

exports.reads = ctx => {

}

exports.update = ctx => {

}
