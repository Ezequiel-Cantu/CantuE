import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import bailarinesRoutes from './routes/bailarines.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(indexRoutes);
app.use("/bailarines", bailarinesRoutes);

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API 19100155',
            version: '1.0.0',
        },
      servers: [
            {url: "https://API-19100155.ezequiel-cantu.repl.co"}
        ],
    },
    apis: ['routes/bailarines.routes.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));

// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app