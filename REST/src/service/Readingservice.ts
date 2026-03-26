import { verifyConnection } from "../db/db_module";
import pool from "../db/db_module";
import { NotFoundError } from "../Errors/NotFoundError";

export async function GetTemperatureData() {
    const query = 'SELECT * FROM temperature_data;'
    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

export async function GetTemperatureOutsideCombined() {
    const query = 'SELECT d.observed_at, d.value AS dmi, ds.temperature AS DS18B20, bm.temperature AS BME280 From "DMI" d ' +
                    'JOIN "DS18B20" ds ON date_trunc(\'minute\', d.observed_at) = date_trunc(\'minute\', ds.observed_at)' +
                    'JOIN "BME280" bm ON date_trunc(\'minute\', d.observed_at) = date_trunc(\'minute\', bm.observed_at)' +
                    'WHERE d.parameter_id = \'temp_dry\' AND bm.location = \'outside\';'
    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}


export async function GethumidityData() {
    const query = 'SELECT * FROM humidity_data;'
    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

export async function GetPressureData() {
    const query = 'SELECT * FROM pressure_data;'
    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}
export async function GetLatestTemperatureData() {
    const query = 'SELECT * FROM ( SELECT *, ROW_NUMBER() OVER ( PARTITION BY source, location ORDER BY observed_at DESC ) AS rn FROM temperature_data ) t WHERE rn = 1;'

    verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

export async function GetLatestHumidityData() {
        const query = 'SELECT * FROM (SELECT *, ROW_NUMBER() OVER ( PARTITION BY source, location ORDER BY observed_at DESC) AS rn FROM humidity_data) t WHERE rn = 1;'
        verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}

export async function GetLatestPressureData() {
            const query = 'SELECT * FROM (SELECT *, ROW_NUMBER() OVER ( PARTITION BY source, location ORDER BY observed_at DESC) AS rn FROM pressure_data) t WHERE rn = 1;'
        verifyConnection();
    try {
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new NotFoundError('There was not found any data');
        }
        return result.rows;
    }catch (error) {
        throw error;
    }
}