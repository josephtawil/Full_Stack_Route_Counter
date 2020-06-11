const express = require("express");
const fs = require("fs");
const router = express.Router();
const path = require("path");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get("/api", (req, res) => {
    console.log("Api was hit");
    res.json({ message: "Successful" });
});

router.get("/api/count", async (req, res) => {
    let countData = await readFileAsync("data.json");
    countData = JSON.parse(countData);
    countData.count++;

    await writeFileAsync("data.json", JSON.stringify(countData, null, 2));
    res.send(countData);
});

module.exports = router;