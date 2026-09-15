USE gpt;

CREATE DATABASE users_db;

USE users_db;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    profession VARCHAR(50),
    age INT
);

INSERT INTO Users (firstname, lastname, profession, age) VALUES
('João', 'Silva', 'Engenheiro', 30),
('Maria', 'Souza', 'Designer', 25),
('Carlos', 'Ferreira', 'Programador', 28);

