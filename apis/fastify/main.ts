import Fastify from 'fastify'
const cluster = require("cluster");
import * as mongoose from "mongoose";
import {getBanner} from "../lib/bannersQuery";
import connectDb from "../config/connetMongo";
const clusterWorkerSize = 4;
require('dotenv').config({
    "path" : '../.env'
})
const fastify = Fastify({
    logger: false
})

fastify.get('/api/banner', async function handler (request, reply) {
    return await getBanner()
})

const start = () => {
    connectDb().then(() =>{
        try {
            fastify.listen({ port: 5000 })
            console.log('Server is running at http://127.0.0.1:5000, worker', cluster.worker.id);
    
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    })

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