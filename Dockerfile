FROM node:latest
MAINTAINER Seok Joon Lee <seokjoon@gmail.com>

RUN npm install -g pm2

# CMD ["pm2-runtime", "/koa-test-k1/src"]
CMD ["pm2-runtime", "/koa-test-k1/ecosystem.config.js"]

EXPOSE 5000
