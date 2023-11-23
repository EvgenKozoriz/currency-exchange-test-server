const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch")

const app = express();
const port = 3001;

app.use(cors());

app.get("/api/data", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/", (req, res) => {
    res.send("server work");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
