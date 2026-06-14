import express from 'express';
import route from './routes/patientRoute.js';
import bodyParser from 'body-parser';
const app = express()

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', route);


export default app;