"use strict";
var express = require("express");
var routes = require("./app/routes/index.js");
var app = express();
routes(app);

app.listen(process.env.PORT||8080,function(){
  console.log("listening on port......");
});