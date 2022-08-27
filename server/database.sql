CREATE DATABASE huddleDB;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,    
    username TEXT 
);

CREATE TABLE spaces(
    space_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE images(
    image_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    space_id INT NOT NULL,
    FOREIGN KEY (space_id) REFERENCES spaces (space_id)
);

CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    space_id INT NOT NULL,
    FOREIGN KEY (space_id) REFERENCES spaces (space_id)
);

CREATE TABLE links(
    link_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    link_address TEXT NOT NULL,
    space_id INT NOT NULL,
    FOREIGN KEY (space_id) REFERENCES spaces (space_id)
);