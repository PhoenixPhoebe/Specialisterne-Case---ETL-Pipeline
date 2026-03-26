import { NextFunction, Request, Response } from "express";
import { parseDataFilter } from "../utils/DataFilters";
import { asyncHandler } from "../utils/asyncHandler";
import {GetDataSpeWithFilters} from "../service/DataSpeService"

export const GetDataFromSpeStation = asyncHandler(async (req: Request, res: Response) => {
    const sensor = req.params.sensor.toString().toUpperCase();
    
    const filter = parseDataFilter(req.query)

    const data = await GetDataSpeWithFilters(sensor, filter)
    res.json(data)
})
