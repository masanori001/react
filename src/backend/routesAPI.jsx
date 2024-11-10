const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true}));

// ユーザーからのログイン認証API
app.post("http://localhost:3000/userAuth",(request,response) => {
    console.log(req.body.username);
    console.log(req.body.password);
    
    response.send("OK\n")
});

app.listen(3000);