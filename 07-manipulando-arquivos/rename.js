const fs = require('node:fs')

fs.rename('arquivo.txt', 'arquivo.csv',(error)=>{
    if (error) {
        console.log("Erro ao renomear o arquivo: ", error.menssage);
    return
    }
    else{
        console.log("Arquivo Renomeado com sucesso!");
        
    }
})