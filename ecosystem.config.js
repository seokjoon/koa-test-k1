module.exports = [
  {
    env: {
      NODE_ENV: 'production',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'koa-test-k1',
    script: '/koa-test-k1/src',
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
