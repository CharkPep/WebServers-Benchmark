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
| Nest.js  | 1552.57 | 662 kB | 5585.43 | ~111 | ~1.6 | 4k |
| Raw HTTP(http library)  | 2136 | 754 | 5155.2 | ~109 | ~1.6  | 3k |
| Nuxt   |  |
| Hapi.js  | 1784.34 | 741 | 5320.62 | 111 | 1.8 | 4k |
| Loopback.js  | 1171.02 | 525 | 6122.69 | | | 5k |
| Adonis.js   |   |
| Next.js  | 369.38 | 153 | 12689.67 |  |  | 2k | 
| Sails.js  |  |
| tRPC Server-OpenApi | Content Cell  |

*CPU, RAM just average value get using top command
