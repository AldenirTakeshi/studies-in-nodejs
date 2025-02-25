const path = require('node:path')

const dir = "src"
const file = "app.js"

const fullpath = path.join(__dirname, dir, file)
console.log(fullpath);
const relativePath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname, relativePath)

console.log(absolutePath);

const fileName = path.basename

