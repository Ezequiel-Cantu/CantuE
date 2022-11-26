import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
//import path from 'path'


const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API 19100155',
            version: '1.0.0',
        },
        servers: [
            {url: "http://localhost:8082"}
        ],
    },
  apis: [`${path.join(__dirname,"./routes/bailarines.routes.js")}`]
}
//Docs en JSON format
const swaggerSpec = swaggerJsDoc(swaggerOptions)
///Function to setup our docs
const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.log('Version 1 Docs are available')
}

//module.exports = {swaggerDocs}

export default swaggerDocs