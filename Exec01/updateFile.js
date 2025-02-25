const fs = require('node:fs')


fs.writeFile("./meuarquivo.txt","Conteudo Modificado!",(error)=>{
    if (error) {
        console.log("Error ao modificar o arquivo: ", error);
        return
    }
    else{
    console.log("Arquivo Modificado com sucesso!");
        
    }
}) 