CREATE TABLE IF NOT EXISTS test_table (
    id SERIAL PRIMARY KEY,
    text VARCHAR(50)
);

INSERT INTO test_table (text) VALUES ('Hello, world!');

