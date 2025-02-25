const fs = require("node:fs")

const filename = './arquivo.csv'

const exists= fs.existsSync(filename)
if (exists) {
    fs.readFile(filename, "utf-8",(error,data) => {
        if(error){
            console.log("Erro ao ler o arquivo: ", error.menssage);
            return 
        }
        const entries = data.split(',')
        console.log(entries);
        entries.forEach((entry)=>{console.log(entry);
        })
    })
}
    else{
        console.log("Arquivo não existe!!");
        
    }



// try {
//     const data = fs.readFileSync("./arquivo.txt","utf8")
//     console.log(data);
    
// } catch (error) {
//     console.log("Errp ao ler o arquivo: ", error.menssage);
    
// }