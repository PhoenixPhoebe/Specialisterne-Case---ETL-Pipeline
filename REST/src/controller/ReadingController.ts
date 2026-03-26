import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import {GetTemperatureData, GetLatestTemperatureData, GetTemperatureOutsideCombined, GethumidityData, GetLatestHumidityData, GetPressureData, GetLatestPressureData} from "../service/Readingservice"


export const GetTemperature = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetTemperatureData()
    res.json(data)
})

export const GetTemperatureOutside = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetTemperatureOutsideCombined()
    res.json(data)
})

export const GetHumidity = asyncHandler(async (req: Request, res: Response) => {
    const data = await GethumidityData()
    res.json(data)
})

export const GetPressure = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetPressureData()
    res.json(data)
})

export const GetLatestTemperature = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetLatestTemperatureData()
    res.json(data)
})

export const GetLatestHumidity = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetLatestHumidityData()
    res.json(data)
})

export const GetLatestPressure = asyncHandler(async (req: Request, res: Response) => {
    const data = await GetLatestPressureData()
    res.json(data)
})