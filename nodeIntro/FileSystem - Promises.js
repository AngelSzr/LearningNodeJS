const fs = require("node:fs/promises");
console.log("Leyendo el primer archivo");

fs.readFile("./archivo.txt", "utf-8").then(text => console.log('primer texto:',text));

console.log("haciendo cosas :)");

console.log("Leyendo el segundo archivo");

fs.readFile("./archivo copy.txt", "utf-8").then(text => {console.log('segundo texto:', text)})

console.log("haciendo más cosas todavía :D");
