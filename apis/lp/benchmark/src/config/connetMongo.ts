const mongoose = require("mongoose")
require('dotenv').config({
    path : 'C:\\Users\\Pep\\WebstormProjects\\httpserversbenchmark\\apis\\lp\\benchmark\\src\\config\\.env'
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

export default connectDb;