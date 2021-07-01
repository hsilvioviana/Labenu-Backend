CREATE TABLE LFS_Users (
id VARCHAR(64) PRIMARY KEY,
name VARCHAR(64) NOT NULL,
nickname VARCHAR(64) UNIQUE NOT NULL,
email VARCHAR(64) UNIQUE NOT NULL,
password VARCHAR(64) NOT NULL,
role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL",
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

-- ADMIN | login: admin@base.com & password: 1234567

INSERT INTO LFS_Users VALUES (
"74820ab8-86c1-4bd5-932b-7a77075b72fc",
"Administrador",
"admin_pedro",
"admin@base.com",
"$2a$12$vQTKWIpqs1WmXcOmFr3WveT9jHv7H5lN0ZitqMTamwyGjaFBrWxKG",
"ADMIN",
CURDATE(),
CURDATE()
);

CREATE TABLE LFS_Musics (
id VARCHAR(64) PRIMARY KEY,
title VARCHAR(64) NOT NULL,
author VARCHAR(64) NOT NULL,
releaseDate DATE NOT NULL,
file TEXT NOT NULL,
genres TEXT NOT NULL,
album VARCHAR(64) NOT NULL,
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL,
postedBy VARCHAR(64),
FOREIGN KEY (postedBy) REFERENCES LFS_Users(id)
);