module.exports = [
  {
    script: '/koa-test-k1/src',
    name: 'koa-test-k1',
    exec_mode: 'cluster',
    instances: 1,
    // node_args: '-r dotenv/config',
    args: 'dotenv/config',
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
