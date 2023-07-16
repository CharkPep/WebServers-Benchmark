import {getBanner} from "../lib/bannersQuery";
import connectDb from "../config/connetMongo";
import mongoose from "mongoose";
const cluster = require("cluster");
const clusterWorkerSize = 4;
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if(ctx.request.url == '/api/banner' && ctx.request.method == 'GET'){
        ctx.set('Content-Type', 'application/json')
        const queryRes = await getBanner()
        ctx.body = JSON.stringify(queryRes)
    }
    
});
function start(){
    connectDb().then(() => {
            app.listen(5000);
            // console.log(data)
            console.log('Server is running at http://127.0.0.1:5000, worker', cluster.worker.id);
        });
}

if (clusterWorkerSize > 1) {
    if (cluster.isPrimary) {
        for (let i=0; i < clusterWorkerSize; i++) {
            cluster.fork();
        }

        cluster.on("exit", async function(worker) {
            await mongoose.connection.close()
            console.log("Worker", worker.id, " has exited.")
        })
        cluster.on("uncaughtException", async function(worker) {
            await mongoose.connection.close()
            console.log("Worker", worker.id, " has exited.")
        })
    } else {
        start();
    }
} else {
    start();
}



