const fs = require('node:fs')

fs.writeFile('./meuarquivo.txt','Conteudo Inicial do arquivo. \nCriando com o module fs do Node.js',"utf-8",(error)=>{
    if (error) {
        console.log("Erro ao criar o arquivo: ", error.message);
        return
    }
    else{
        console.log("Arquivo criado com sucesso!");
        
    }
})