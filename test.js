const eCrud = require("./Auth/functions.js");
const Crud = require("./Auth/crud.js");

console.log(eCrud.PremiumCount());

console.log(Crud.User("nano"))

console.log(Crud.userUpdate(process.argv[2], process.argv[3], process.argv[4], process.argv[5]));