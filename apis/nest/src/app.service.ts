import {Injectable} from "@nestjs/common";
import banner from "../models/Banner";

@Injectable()
export class BannerService{
    getBanner(){
        let randomPercentage = Math.random()
        return banner
            .find({ percentage : { $gte : randomPercentage }}).limit(1)
    }
    
}