import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "srx970305",
  database: "srx-blog",
  authSwitchHandler: function (data, callback) {
    if (data.pluginName === "caching_sha2_password") {
      callback(null, Buffer.from("srx970305\0"));
    }
  },
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});
