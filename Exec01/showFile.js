const { error, log } = require('node:console')
const fs = require('node:fs')

fs.readFile("./meuarquivo.txt", "utf-8",(error,data)=>{
    if (error) {
        console.log("Erro ao ler o arquivo: ", error.message);
        return
    }
    else{
        console.log("Conteudo do aruivo: ", data);
    }
})