
import { Datafilter } from "../utils/DataFilters";
import { verifyConnection } from "../db/db_module";
import pool from "../db/db_module";
import { pagenation } from "../utils/pagenation";
import { NotFoundError } from "../Errors/NotFoundError";

import { BadRequestError } from "../Errors/BadRequestError";

//Get data from one DMI station, Filters are included

export async function GetDMIDataWithFilters(id: string | string[], filters: Datafilter) {
    
    let query = 'SELECT * From "DMI" WHERE station_id = $1';
    let values = [id];
    if (filters.parameter !== undefined){
        values.push(filters.parameter)
        query += " AND parameter_id = $2";
    }
    if (filters.page !== undefined){
        query += pagenation(filters.page, filters.pagesize)
    }
    console.log(query);
    console.log(values);
    verifyConnection();
    try {
        const result = await pool.query(query, values);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data on station id: ' + id);
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

