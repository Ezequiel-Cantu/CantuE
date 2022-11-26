import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import bailarinesRoutes from './routes/bailarines.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(indexRoutes);
app.use("/bailarines", bailarinesRoutes);

// Error Handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

export default app