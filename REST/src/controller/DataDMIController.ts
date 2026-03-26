import { NextFunction, Request, Response } from "express";
import { parseDataFilter } from "../utils/DataFilters";
import { asyncHandler } from "../utils/asyncHandler";
import { GetDMIDataWithFilters } from "../service/DataDMIServices";


export const GetDMIDataFromStation = asyncHandler(async (req: Request, res: Response) => {
    // #swagger.tags = ['DMI']
    //#swagger.autoBody = true
    // #swagger.autoQuery = true 
    

     const stationId = req.params.id;
    
    const filter = parseDataFilter(req.query)

    const data = await GetDMIDataWithFilters(stationId, filter)
    res.json(data)
    
    
});
