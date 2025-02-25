const os = require('node:os')

const platform = os.platform()
console.log("plataforma do SO: ", platform);

const arch = os.arch()

console.log("Arquitetura do SO: ", arch);

const cpus = os.cpus()

console.log("Quantidade de CPUS do SO: ", cpus.length);

const memory = os.totalmem()

console.log("Quantidade de Memoria do SO: ", memory/1024/1024/1024)

