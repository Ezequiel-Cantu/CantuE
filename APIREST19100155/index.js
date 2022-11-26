import { PORT } from "./config.js";
import app from './app.js'
import {connectToDB} from './utils/mongoose.js'
import swaggerDocs from './swagger.js'


async function main(){
  await connectToDB()
  app.listen(PORT)
  console.log('Server is running on port',PORT)
  swaggerDocs(app, PORT)
}

main()