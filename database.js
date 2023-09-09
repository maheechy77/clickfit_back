import mysql from "mysql2";

export const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"Laravel5.6",
    database:"user"
}).promise();


const createTable = await pool.query("CREATE TABLE user_table(ID INT NOT NULL AUTO_INCREMENT , EMAIL VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,TYPE VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,ACTIVE TINYINT default 1,primary key (ID))");

