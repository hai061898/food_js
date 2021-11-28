//link mysql: https://github.com/hai061898/mysql_food

import mysql from 'mysql';
import { promisify } from 'util';

const pool = mysql.createPool({
    host: 'localhost:8080',
    user: 'root',
    password: "",
    database: 'food'
});

pool.getConnection((err,connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST')  console.log('DATABASE CONNECTION WAS CLOSED');
        if( err.code === 'ER_CON_COUNT_ERROR' ) console.log('DATABASE HAS TO MANY CONNECTIONS');
        if( err.code === 'ECONNREFUSED' ) console.log('DATABASE CONNECTION WAS REFUSED');
    }
    if(connection) connection.release(); // giống tự đông kết nối lại nếu mất 
    console.log('DataBase is connected to '+ process.env.DB_DATABASE);
    return;
});

pool.query = promisify(pool.query);

export default pool;