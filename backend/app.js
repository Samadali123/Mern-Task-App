const express = require("express");
const { createDbConnection } = require("./config/db");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT
const logger = require("morgan")
const cors = require("cors")
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "frontend", "vite-project", "dist", "index.html"));
});


// create db connection
createDbConnection();


// reading json data and request body 

app.use(express.json())
app.use(express.urlencoded({extended : true}))


// logging requests 
app.use(logger("dev"))


//aply cors
app.use(cors());


// stitch the routes to the server
require("./routes/task.routes")(app);



app.listen(PORT, ()=>{
    console.log(` Server started on port ${PORT}`)
})


module.exports = app;
