import express from "express";
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { routes } from "./routes/routes";
import { errorHandler } from "./middleware/ErrorHandler";
import swaggerDocument from './swagger/swagger-output.json';
import cors from "cors";
const app = express();


app.use(express.json());
app.use("/vejrData", routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors());
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

