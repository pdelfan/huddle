require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// routes

// get all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("select * from users");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
});

// get all spaces
app.get("/spaces", async (req, res) => {
  try {
    const result = await pool.query("select * from spaces");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
});

// get all images
app.get("/images", async (req, res) => {
  try {
    const result = await pool.query("select * from images");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
});

// get all links
app.get("/links", async (req, res) => {
  try {
    const result = await pool.query("select * from links");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
});

// get all notes
app.get("/notes", async (req, res) => {
  try {
    const result = await pool.query("select * from notes");
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server has started on port 6000");
});
