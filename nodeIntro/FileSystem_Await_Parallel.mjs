import {readFile} from 'node:fs/promises'

Promise.all([
    readFile("./archivo.txt", "utf-8"),
    readFile("./archivo copy.txt", "utf-8")
]).then(([firstText,secondText])=>{
    console.log('primer texto:',firstText);
    console.log('segundo texto:', secondText)
})