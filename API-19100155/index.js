import { PORT } from "./config.js";
import app from './app.js'
import {connectToDB} from './utils/mongoose.js'



async function main(){
  await connectToDB()
  app.listen(PORT)
  console.log('Server is running on port',PORT)
  //app.swaggerDocs(app, PORT)
}

main()
