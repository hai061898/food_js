import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
app.use( express.json() );
app.use( express.urlencoded({ extended: false }));


app.listen(process.env.APP_PORT, ()=>console.log('Server on port :' + process.env.APP_PORT));