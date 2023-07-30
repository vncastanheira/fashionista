CREATE TABLE products (
    ID           INTEGER PRIMARY KEY,
    NAME         TEXT NOT NULL,
    PRICE        REAL NOT NULL,
    DESCRIPTION  TEXT,
    CATEGORY     TEXT,
    ONSALE       BOOLEAN,
    SEX          NUMERIC NOT NULL
);

CREATE TABLE imageproducts (
    ID           INTEGER PRIMARY KEY,
    PRODUCTID    INTEGER REFERENCES products (ID),
    IMAGEBLOB    BLOB
);

INSERT INTO products (NAME, PRICE, SEX) VALUES ('Shirt',    30.99,   0);
INSERT INTO products (NAME, PRICE, SEX) VALUES ('Toupée',   25.99,   0);
INSERT INTO products (NAME, PRICE, SEX) VALUES ('Shorts',   100.99,  0);
INSERT INTO products (NAME, PRICE, SEX) VALUES ('Coat',     215.99,  0);