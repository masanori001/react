const express = require("express");
const app = express();

app.get("/hello",(request,response) => {
    response.send("hello world\n");
});

app.listen(3000);