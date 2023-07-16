import connectDb from "../config/connetMongo";
import mongoose from "mongoose";
import {getBanner} from "../lib/bannersQuery";
const cluster = require("cluster");
const clusterWorkerSize = 4;
const Hapi = require('@hapi/hapi');

const start = async () => {
    await connectDb()
    const server = Hapi.server({
        port: 5000,
        host: '127.0.0.1'
    });

    server.route({
        method: 'GET',
        path: '/api/banner',
        handler: async (request, h) => {
            return await getBanner();
        }
    });


    await server.start();
    console.log('Server is running at http://127.0.0.1:5000, worker', cluster.worker.id);
};


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
