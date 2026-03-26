import express from "express"
import { getWeatherStations } from "../controller/StationsController"
import { GetDMIDataFromStation } from "../controller/DataDMIController";
import { GetDataFromSpeStation } from "../controller/dataSpeController";
import { GetTemperature, GetLatestTemperature, GetTemperatureOutside, GetHumidity, GetLatestHumidity, GetPressure, GetLatestPressure } from "../controller/ReadingController";


export const routes = express.Router();

routes.get("/stations",
      /* #swagger.tags = ['DMI'] 
        #swagger.description = 
        'This enpoint returns a list of weather 
        stations that has been collected data from.'
        
        #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[400] = { description: 'Somthing went wrong with the request' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

      */getWeatherStations);
routes.get("/data/dmi/:id",
  /*
  #swagger.tags = ['DMI'] 
  #swagger.description = 
    'This enpoint returns a list of DMI data for a specific station.
    The station is identified by its id, which is passed as a path parameter.
    It's also an optional parameter to specify pagenation, by passing page and limit as query parameters.
    Its default value for page is 1 and for limit is 10.
    It's also possible to specify the type of reading to be returned by passing the type query parameter, which can be either "temp", "humi" or "press".'
    #swagger.parameters['id'] = {
      in: 'path',
      required: true,
      type: 'string'
    }
  #swagger.parameters['page'] = {
    in: 'query',
    required: false,
      type: 'integer'
    }
    #swagger.parameters['pagesize'] = {
      in: 'query',
      required: false,
      type: 'integer'
    }
     #swagger.parameters['parameter'] = {
      in: 'query',
      description: 'Weather parameter to filter by',
      type: 'string',
      enum: ['temperature', 'humidity', 'pressure']
      }

    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[400] = { description: 'Somthing went wrong with the request' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
  GetDMIDataFromStation)
routes.get("/data/spe/:sensor", 
    /*
  #swagger.tags = ['Specialisterne data'] 
  #swagger.description = 
    'This enpoint returns a list of data from Specialisterne for a specific Sensor.
    The sensor is identified by its type, which is passed as a path parameter.
    It's also an optional parameter to specify pagenation, by passing page and limit as query parameters.
    Its default value for page is 1 and for limit is 10.'
    #swagger.parameters['sensor'] = {
      in: 'path',
      required: true,
      type: 'string'
    }
  #swagger.parameters['page'] = {
    in: 'query',
    required: false,
      type: 'integer'
    }
    #swagger.parameters['pagesize'] = {
      in: 'query',
      required: false,
      type: 'integer'
    }

    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[400] = { description: 'Somthing went wrong with the request' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
  GetDataFromSpeStation)

routes.get("/data/temperature", 
    /*
  #swagger.tags = ['Readings']
  #swagger.description = 
    'This enpoint returns a list of temperature readings from all stations.'
    
    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
   GetTemperature)

   routes.get("/data/temperature/latest", 
    /*
  #swagger.tags = ['Readings'] 
  #swagger.description = 
    'This enpoint returns a list of the latest readings for temperature from all stations.'
    
    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
   GetLatestTemperature)
  
  routes.get("/data/temperature/outside", 
    /*
  #swagger.tags = ['Readings'] 
  #swagger.description = 
    'This enpoint returns a list of combined temperature readings from the outside location for all stations.'
    */
   GetTemperatureOutside)

routes.get("/data/humidity", 
    /*
  #swagger.tags = ['Readings'] 
  #swagger.description = 
    'This enpoint returns a list of humidity readings from all stations.'
     #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
*/
    GetHumidity)


routes.get("/data/humidity/latest", 
      /*
  #swagger.tags = ['Readings'] 
  #swagger.description = 
    'This enpoint returns a list of the latest readings for humidity from all stations.'
    
    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
   GetLatestHumidity)
routes.get("/data/pressure",
    /*
  #swagger.tags = ['Readings'] 
  #swagger.description ='This enpoint returns a list of pressure readings from all stations.'
     #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }
*/
    GetPressure)

routes.get("/data/pressure/latest", 
      /*
  #swagger.tags = ['Readings'] 
  #swagger.description = 
    'This enpoint returns a list of the latest readings for pressure from all stations.'
    
    #swagger.responses[200] = { description: 'Success' }
        #swagger.responses[404] = { description: 'Request is valid but no data was found' }
        #swagger.responses[500] = { description: 'Internal Server Error' }

    */
   GetLatestPressure)

