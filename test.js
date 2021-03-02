const eCrud = require("./CNC/Auth/functions.js");
const Crud = require("./CNC/Auth/crud.js");

const Table = require("./CNC/banners/table_creator/main.js");

console.log(eCrud.PremiumCount());

console.log(Crud.User("nano"))

// console.log(Crud.userUpdate(process.argv[2], process.argv[3], process.argv[4], process.argv[5]));