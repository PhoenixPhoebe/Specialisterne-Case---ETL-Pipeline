
import { Datafilter } from "../utils/DataFilters";
import { verifyConnection } from "../db/db_module";
import pool from "../db/db_module";
import { pagenation } from "../utils/pagenation";
import { NotFoundError } from "../Errors/NotFoundError";

import { BadRequestError } from "../Errors/BadRequestError";

const tables = ["BME280", "DS18B20", "SCD41"] as const;
type tableField = typeof tables[number];
const istable = (value: string): value is tableField =>
    tables.includes(value as tableField);

export async function GetDataSpeWithFilters(sensor: string, filters: Datafilter) {
    if(!istable(sensor)){
        throw new BadRequestError("Sensor dose not exist")
    }
    parameterRequest(sensor, filters)
    let query = 'SELECT * From "' + sensor + '"';
    const values = [sensor];
    if (filters.page !== undefined){
        query += pagenation(filters.page, filters.pagesize)
    }
    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data on sensor: ' + sensor);
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

function parameterRequest(sensor : string, filters : Datafilter){
    if(filters.parameter == "pressure"){
        throw new BadRequestError("There are no preasure reading on sensor: " + sensor )
    }

    if(filters.parameter == "humidity" && sensor == "DS18B20"){
        throw new BadRequestError("There are no humidity reading on sensor: " + sensor )
    }

}