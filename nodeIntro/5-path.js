const path = require('node:path');
const separador = path.sep

const filePath = path.join('content','pathway','text.txt')
console.log(filePath);

const base = path.basename('/tempt/contras/contrasena.txt','.txt')
console.log(base);

const extension = path.extname('image.jpg')
console.log(extension);