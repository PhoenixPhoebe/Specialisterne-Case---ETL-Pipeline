import { QueryResult } from "pg";
import pool from "../db/db_module"
import { verifyConnection } from "../db/db_module";


export async function getStations() {

    const query = 'SELECT Distinct station_id FROM "DMI"';
  
    verifyConnection();
    try {
        const result = await pool.query(query);
        var station;
        const stations : any = []
    
        for(let i = 0; result.rows.length > i; i++){
        station = await fetch("https://opendataapi.dmi.dk/v2/metObs/collections/station/items?stationId=0"+ result.rows[i].station_id).then(res => res.json())
        stations.push(station)
        };
        

        return stations;

    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
    
}

async function getStationData(stationId: string) {
    
    const response =  await fetch("https://opendataapi.dmi.dk/v2/metObs/collections/station/items?stationId=0"+ stationId) 
            
    const result = await response.json()
    console.log(result)
    return result;    
}
