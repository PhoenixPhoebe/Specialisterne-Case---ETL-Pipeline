import { BadRequestError } from "../Errors/BadRequestError";
export interface Datafilter {
    page?: number;
    pagesize?: number;
    parameter?: string;
    from?: string;
    to?: string
}

const parameters = ["temperature", "humidity", "pressure"] as const;
type parameterField = typeof parameters[number];
const isParameter = (value: string): value is parameterField =>
    parameters.includes(value as parameterField);

export const parseDataFilter = (query: any): Datafilter => {
    const filters: Datafilter = {};
    if (query) {
        filters.page = query.page ? Number(query.page) : undefined,
            filters.pagesize = query.pagesize ? Number(query.pagesize) : undefined;
        
        if (query.parameter) {
            if (!isParameter(query.parameter)) {
                throw new BadRequestError(`Invalid sort field: ${query.sort}`);
            };
            filters.parameter = query.parameter;
            if(query.parameter = "temperature"){
                filters.parameter = "temp_dry";
            }
        }
        else{
            filters.parameter = undefined;
        }
    };

    return filters
}

