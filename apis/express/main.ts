import {getBanner} from "../lib/bannersQuery";
import connectDb from "../config/connetMongo";
import mongoose from "mongoose";
const cluster = require("cluster");
const os = require('os')
const clusterWorkerSize = 4;
const app = require('express')()
const PORT = 5000


app.get('/api/banner', async function (req, res) {
    getBanner()
    const queryRes = await getBanner()
    // console.log(queryRes)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(queryRes));

})

function start(){
    connectDb().then(() => {
        app.listen(PORT, () => {
            console.log('Server is running at http://127.0.0.1:5000, worker', cluster.worker.id);
        })
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





