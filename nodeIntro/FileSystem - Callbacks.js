const fs = require("node:fs");
console.log("Leyendo el primer archivo");

fs.readFile("./archivo.txt", "utf-8", (err, txt) => {
    console.log(txt);
});

console.log("haciendo cosas 🌞");

console.log("Leyendo el segundo archivo");

fs.readFile("./archivo copy.txt", "utf-8", (err, txt) => {
  console.log(txt);
});

console.log("haciendo más cosas todavía 🫏");
