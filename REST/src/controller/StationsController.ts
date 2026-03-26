import { Request, Response } from "express";
import {getStations} from "../service/stationsService"

export async function getWeatherStations(req: Request, res: Response){
   
    const data = await getStations();

    res.json(data);
}

