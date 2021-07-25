module.exports = [
  {
    env: {
      NODE_ENV: 'production',
      PATH_PRODUCTION: 'koa-test-k1',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'koa-test-k1',
    script: '/koa-test-k1/src/index.js',
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
