import connetMongo from "../../config/connetMongo";

const connect = async () => {
    await connetMongo()
}


export default connect;