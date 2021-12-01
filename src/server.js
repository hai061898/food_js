import express from "express";
import { config } from "dotenv";
import path from 'path';


import routerUser from "./router/user_routes";

config();
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routerUser);

app.use( express.static( path.join( __dirname, 'uploads/profile' )));

app.listen(process.env.APP_PORT, () =>
  console.log("Server on port :" + process.env.APP_PORT)
);
