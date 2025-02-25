const fs = require("node:fs")

const content = "Conteudo do novo arquivo assíncrono"

fs.writeFile("./arquivo.txt", content, "utf-8",(error)=> {
    if(error){
        console.log('Erro ao escrever o arquivo: ', error.menssage);
        return
    }
    console.log("Arquivo criando com sucesso de forma sincrona");
})

// try {
//     fs.writeFileSync("./arquivo.txt","Hello World","utf-8")
// console.log("Arquivo criando com sucesso!");
        
// } catch (error) {
//     console.log('Erro ao escrever o arquivo: ', error.menssage);
    
// }
