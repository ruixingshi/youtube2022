import mysql from "mysql";

export const  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "srx970305",
    database: "srx-blog"
});
