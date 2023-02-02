DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;


CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    -- password will be hashed through routes rather than sql
    password VARCHAR(100)
);

CREATE TABLE book (
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

-- INSERT INTO users(username, password)
-- VALUES ("TJ", "password"), ("not tj", "password");

-- INSERT INTO book(title, id, user_id) 
-- VALUES ("Leaves of Grass", "0", 1),
-- ("dune", "1", 1);

-- SELECT * FROM users;
-- SELECT * from book WHERE user_id = 1;
-- QUERY FOR SPECIFIC USER
-- SELECT * FROM users WHERE id = ${somevar};

-- QHERY FOR USER'S WISHLIST
-- SELECT * FROM book WHERE id = "0";