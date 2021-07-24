##
* docker build --tag koa-test-k1 .
* docker run -d --restart unless-stopped --name=k1 -v /d1/app/www/5000/seokjoon/koa-test-k1:/koa-test-k1 -p 5000:5000 koa-test-k1
* docker logs k1
* docker exec -it k1 pm2 list





