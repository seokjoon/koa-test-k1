const reqs = ctx => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
    body: ctx.request.body,
  }
}


//exports.create = ctx => {
export const create = ctx => {}

export const destroy = ctx => {}

export const getReq = ctx => reqs(ctx)

export const read = ctx => {}

export const reads = ctx => {}

export const update = ctx => {}
