const { error } = require('node:console')
const fs = require('node:fs')

fs.unlink("./meuarquivo.txt",(error)=>{
    if (error) {
        console.log("Erro ao Ecluir o arquivo: ", error.message);
        return
    }
    else{
        console.log("Arquivo Excluido com sucess!");
        
    }
})