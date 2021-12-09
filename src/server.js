import express from "express";
import { config } from "dotenv";
import path from 'path';


import routerUser from "./router/user_routes";
import routeAuth from './router/auth_routes';
import routerCategory from './router/category_routes';

config();
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routerUser);
app.use('/api', routeAuth);
app.use('/api', routerCategory);

app.use( express.static( path.join( __dirname, 'uploads/profile' )));

app.listen(process.env.APP_PORT, () =>
  console.log("Server on port :" + process.env.APP_PORT)
);
