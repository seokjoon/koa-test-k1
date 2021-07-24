module.exports = [
  {
    script: '/koa-test-k1/src',
    name: 'koa-test-k1',
    exec_mode: 'cluster',
    instances: 1
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
