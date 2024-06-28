import {readFile} from 'node:fs/promises' 
(async()=>{
console.log("Leyendo el primer archivo");

const firstText = await readFile("./archivo.txt", "utf-8")
console.log('primer texto:',firstText)

console.log("haciendo cosas :)");

console.log("Leyendo el segundo archivo");

const secondText = await readFile("./archivo copy.txt", "utf-8")
console.log('segundo texto:', secondText)

console.log("haciendo más cosas todavía :D");

})()

