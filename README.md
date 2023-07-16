# JS-WebServers-Benchmark
* VM Ubuntu 20.04 2 Core 16 RAM, location Poland
* MongoDb M30, location Warsaw
* Server Nginx
* One NodeJs instance
* Local machine location about 1k km from server
* Using [autocannon](https://github.com/mcollina/autocannon/tree/master) with parameters `-c 1000 -w 10 -p 5 -d 180` 2 runs
  
Nginx Config:
```
server {
    listen 80 fastopen=256;
    server_name _;
    keepalive_timeout 10;
    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```
Sysctl config:
```
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15
net.core.somaxconn = 4096
net.ipv4.tcp_wmem = 30240 87380 12582912
net.ipv4.tcp_rmem = 30240 87380 12582912
```

Testing endpoint performance with some point of production-level setup

| Server  | Req/sec avg | KBytes/sec avg | Latency m/s avg | CPU avg % | RAM | Timeouts |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Fastify | 1998.09 | 736 | 3695.95 | ~110 | ~1.6 | 19k |
| Express.js  | 1727.24 | 650 | 4739.15 | ~110 | ~1.6 | 11k |
| Koa.js  | 1955.23 | 690 | 5228.63 | ~111 | ~1.7  | 4k |
| Nest.js  |  |
| Raw HTTP(e.c standart http library)  | Content Cell  |
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

*CPU, RAM just average value get using top command
