import express from "express";
import { config } from "dotenv";
import path from 'path';


import routerUser from "./router/user_routes";
import routeAuth from './router/auth_routes';
import routerCategory from './router/category_routes';
import routerProduct from './router/product_routes';
import routerOrder from './router/order_routes';

import { createServer } from "http";
import { Server } from "socket.io";
import  { socketOrderDelivery }  from './sockets/socket_order'

// --------------------------------------------------------------------


config();
const app = express();
const __dirname = path.resolve();



const httpServer = createServer(app);
const io = new Server(httpServer);
socketOrderDelivery(io);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routerUser);
app.use('/api', routeAuth);
app.use('/api', routerCategory);
app.use('/api', routerProduct);
app.use('/api', routerOrder);

app.use( express.static( path.join( __dirname, 'uploads/profile' )));
app.use( express.static( path.join( __dirname, 'uploads/products' )));

app.listen(process.env.APP_PORT, () =>
  console.log("Server on port :" + process.env.APP_PORT)
);
