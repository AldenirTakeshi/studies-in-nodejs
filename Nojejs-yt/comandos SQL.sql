-- Comandos Mysql 
-- Login
mysql -h localhost -u root -p

-- MOSTRAR DATABASES
SHOW DATABASES;

-- Criar Banco de Dados
CREATE DATABASE nomeDoBanco;

-- Acessar no Bando de Dados
USE nomeDoBanco;

-- Criar uma Tabela
CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

-- Mostrar Tabelas 
SHOW TABLES;

-- Ver a Estrutura da Tabela
DESCRIBE nomeDaTabela;

-- Inserir dados em uma Tabela
INSERT INTO usuarios(nome,email,idade) VALUES (
    "Joseph",
    "Joseph@modelo.com",
    15
);

--Listar os dados de uma Tabela
SELECT * FROM usuarios;

-- Expecificar uma consulta tem que usar o  WHERE
SELECT * FROM usuarios WHERE idade = 13;
SELECT * FROM usuarios WHERE nome = "Joseph";
SELECT * FROM usuarios WHERE idade >= 18;