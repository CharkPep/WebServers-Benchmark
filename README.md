# JS-WebServers-Benchmark
* VM Ubuntu 20.04 2 Core 16 RAM, location Poland
* MongoDb M30, location Warsaw
* Server Nginx
* One NodeJs instance
* Local machine location about 1k km from server
* Using [autocannon](https://github.com/mcollina/autocannon/tree/master) with parameters `-c 1000 -w 10 -p 5 -d 180` 2 runs
* Increased maximum number of opened files
  
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

| Server  | Req/sec avg | KBytes/sec avg | Latency m/s avg | CPU avg % | RAM | Timeouts | Simple RPS | Simple Latency | proxy to unix domain socket  RPS |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
| Fastify | 1998.09 | 736 | 3695.95 | ~110 | ~1.6 | 19k | 26755.97 | 397.07 |
| Express.js  | 1727.24 | 650 | 4739.15 | ~110 | ~1.6 | 11k | 8303.62 | 948.86 |
| Koa.js  | 1955.23 | 690 | 5228.63 | ~111 | ~1.7  | 4k |
| Nest.js  | 1552.57 | 662 kB | 5585.43 | ~111 | ~1.6 | 4k |
| Raw HTTP(http library)  | 2136 | 754 | 5155.2 | ~109 | ~1.6  | 3k | 31726.47 | 322.59 | 6629.88 |
| Hapi.js  | 1784.34 | 741 | 5320.62 | 111 | 1.8 | 4k |
| Loopback.js | 1171.02 | 525 | 6122.69 | | | 5k |
| Next.js | 1102.03 | 496 | 12689.67 |  |  | 2k | 
| Sails.js | 1307.56 | 553 | 30573.02 | | | 5k |
| tRPC OpenApi | 1451.43 | 527 | 31046.72 | ~110 | ~2 | 3k |

*Simple RPS - endpoint that just sends simple JSON back. Tested with config `-c 2000 -w 1 -p 5 -d 60`
 
*CPU, RAM just average value get using top command

Conclusion:

* The best way to optimize the server is to ship fewer bits to the client
* Most of the server load is bounded to i/o load, which, lucky for us node handles pretty well because of its event loop
* From my tests it's a great idea to tune your server, though in this case there was not much to optimize(p.s I got an additional 100+ RPS), but in cases with long-lived or big content size it's important and can boost your performance 
* Locate the server closer to the client is also important because it decreases initial latency
* Locate DB as close as possible to the server
* btw surprise for me, but fastify claims are true about simple RPS(see table), which was kinda shocking for me, why express so slow when it comes to just sending a responses??
