USE ficha_7;

CREATE DATABASE utilizadores;

CREATE TABLE Users(
users_id INT AUTO_INCREMENT PRIMARY KEY,
firstname varchar(50),
lastname varchar(50),
profession varchar(50),
age int
);

INSERT INTO Users(firstname, lastname, profession, age) VALUES
('zé','simão','secretariado', '36' ),
('maria', 'joana','balconista', '24'),
('João', 'Antonio','pedreiro','40');

SELECT * FROM Users where age=? and profession=?;