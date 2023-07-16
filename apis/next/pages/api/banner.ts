import {NextApiRequest, NextApiResponse} from "next";
import connect from "@/utils/dbConfig";
import {Response} from "next/dist/compiled/@edge-runtime/primitives";
import Banner from "../../models/Banner";

export default async function handler(req : NextApiRequest, res : NextApiResponse ) {
    
    try{
        let randomPercentage = Math.random()
        const Response = await Banner
            .find({ percentage : { $gte : randomPercentage }}).limit(1)

        res.status(200).json(Response)
    }
    catch (err){
        res.status(500).send(err)
    }
}