exports.create = ctx => {
  ctx.body = {
    body: ctx.request.body,
  }
}

exports.delete = ctx => {

}

exports.help = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  }
}

exports.read = ctx => {

}

exports.reads = ctx => {

}

exports.update = ctx => {

}
