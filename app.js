const import_express = require("express");
const server_instance = import_express();
server_instance.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
//server_instance.listen(3000);
module.exports = server_instance;
