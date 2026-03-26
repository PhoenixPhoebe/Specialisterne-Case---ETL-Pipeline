import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v1.0.0',
    title: 'Specialisterne ETL process API',
    description: 'This is the API dokumentation for an assigment creating REST APIs showing data collected from weather stations'
  },
  host: `localhost:3000/VejrData`,
  basePath: '/',
  schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['../routes/routes.ts'];

swaggerAutogen()(outputFile, endpointsFiles, doc);