import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const mongoose = require("mongoose")
const cluster = require("cluster");
const clusterWorkerSize = 4;

require('dotenv').config({
  "path" : 'C:/Users/Pep/WebstormProjects/httpserversbenchmark/apis/.env'
})

const connectDb = async () => {
  const connect = await mongoose.connect(process.env.CONNECTION_STRING)
  console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
  );

  return connect
};


function start() {
  connectDb().then(async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(5000);
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

