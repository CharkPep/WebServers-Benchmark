# JS-WebServers-Benchmark

So I benched some of the most popular JS frameworks.

There are two tests performed, one on my local machine (CPU: Ryzen 5 5600H, RAM: 20GB) and one with a more production-level environment.

The test will be performed on one endpoint that returns "ad", for example 

```JavaScript
  {
    name : "ad_513510"
    price : 1000.9989583493276
    description : "<empty>"
    onClickLink :"http://google.com"
    shown :0
  }
```

Of course, this is not an ideal ad service simulation, but I decided to keep it simple and stick with it.

Local environment

| Server  | Req/sec | Bytes/sec | Latency m/s | CPU % | RAM Mb | 
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Raw HTTP(e.c standart http library)  | Content Cell  |
| Express.js  | Content Cell  |
| Koa.js  | Content Cell  |
| Meteor.js  | Content Cell  |
| Nest.js  | Content Cell  |
| Fastify  | Content Cell  |
| Nuxt   | Content Cell  |
| Hapi.js  | Content Cell  |
| Feather.js  | Content Cell  |
| Loopback.js  | Content Cell  |
| Adonis.js   | Content Cell  |
| Derby.js   | Content Cell  |
| Next.js  | Content Cell  |
| Total.js  | Content Cell  |
| Sails.js  | Content Cell  |
| tRPC Server   | Content Cell  |


